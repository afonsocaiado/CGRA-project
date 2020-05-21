/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.angY = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.turning = 0;
        this.autopilot = false;
        this.pilotAng = 0;
        this.startAutopilotTime = -1;
        this.autopilotTime = 0;
        this.xAutopilotCenter = 0;
        this.zAutopilotCenter = 0;
        this.initBuffers();
        
        this.elipse = new MyElipse(this.scene, 16, 8);
        this.gondola = new MyGondola(this.scene);
        this.rudder = new MyRudder(this.scene);
        this.rudder1 = new MyRudder(this.scene);
        this.rudder2 = new MyRudder(this.scene);
        this.rudder3 = new MyRudder(this.scene);
        this.flag = new MyPlane(this.scene, 20);
        this.thread = new MyHelice(this.scene);
        this.thread1 = new MyHelice(this.scene);
    }

    initBuffers()
    {
        this.texture=new CGFtexture(this.scene,'images/flag.jpg');

        this.flagShader = new CGFshader(this.scene.gl, "shaders/flag.vert", "shaders/flag.frag");
        this.flagShader.setUniformsValues({ uSampler: 1 });
        this.flagShader.setUniformsValues({ vehicleSpeed: 0.05 });
        this.flagShader.setUniformsValues({time: 0});
        this.flagShader1 = new CGFshader(this.scene.gl, "shaders/reverseFlag.vert", "shaders/flag.frag");
        this.flagShader1.setUniformsValues({ uSampler: 1 });
        this.flagShader1.setUniformsValues({time: 0});
        this.flagShader1.setUniformsValues({ vehicleSpeed: 0.05 });
    }

    turn(val)
    {
        this.angY += val;
        this.turning = val;
    }

    accelerate(val)
    {
        this.speed += val;
    }

    reset()
    {
        this.angY = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.gondola.reset();
        this.rudder2.reset();
        this.rudder3.reset();
        this.turning = 0;
        this.autopilot = false;
        this.pilotAng = 0;
        this.startAutopilotTime = -1;
        this.autopilotTime = 0;
        this.updateFlag(0);
    }

    startAutopilot()
    {
        this.autopilot = true;
        this.xAutopilotCenter = this.x + 5 * Math.sin((this.angY + 90)*Math.PI/180);
        this.zAutopilotCenter = this.z + 5 * Math.cos((this.angY + 90)*Math.PI/180);
    }

    update(t)
    {
        if(this.autopilot == false){
            this.x += this.speed * Math.sin(this.angY*Math.PI/180);
            this.z += this.speed * Math.cos(this.angY*Math.PI/180);
        }
        else {
            if(this.startAutopilotTime == -1)
            {
                this.pilotAng = this.angY;
                this.startAutopilotTime = t;
            }
            this.autopilotTime = t - this.startAutopilotTime;
            this.angY = this.pilotAng + (this.autopilotTime*360/5000);
            this.x = this.xAutopilotCenter - 5 * Math.sin((this.angY + 90)*Math.PI/180);
            this.z = this.zAutopilotCenter - 5 * Math.cos((this.angY + 90)*Math.PI/180);
            this.speed = 1;
            this.turning = 5;
        }
    
        this.gondola.update(this.speed);

        if(this.turning != 0){
            this.rudder2.turn(-this.turning);
            this.rudder3.turn(this.turning);
        } else {
            this.rudder2.reset();
            this.rudder3.reset();
        }
        this.turning = 0;

        this.updateFlag(t % 1000 / 1000);
    }

    updateFlag(t)
    {
        this.flagShader.setUniformsValues({ vehicleSpeed: this.speed+0.05 });
        this.flagShader.setUniformsValues({time: t});

        this.flagShader1.setUniformsValues({ vehicleSpeed: this.speed+0.05 });
        this.flagShader1.setUniformsValues({time: t});
    }


    display()
    {
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);

        this.scene.rotate(this.angY*Math.PI/180, 0, 1, 0);


        // CORPO PRINCIPAL
        this.scene.pushMatrix();
        this.scene.scale(2,2,2);
        this.elipse.display();
        this.scene.popMatrix();


        //GONDOLA INFERIOR
        this.scene.pushMatrix();
        this.scene.translate(0,-2.2,0);
        this.scene.scale(0.4,0.4,0.4);
        this.gondola.display();
        this.scene.popMatrix();


        //LEME DIREITO
        this.scene.pushMatrix();
        this.scene.translate(1,0,-3);
        this.scene.scale(1,1,1.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.rudder.display();
        this.scene.popMatrix(); 

        //LEME ESQUERDO
        this.scene.pushMatrix();
        this.scene.translate(-1,0,-3);
        this.scene.scale(-1,-1,1.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.rudder1.display();
        this.scene.popMatrix(); 

        //LEME CIMA
        this.scene.pushMatrix();
        this.scene.translate(0,1,-3);
        this.scene.scale(1,1,1.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.rudder2.display();
        this.scene.popMatrix(); 

        //LEME BAIXO
        this.scene.pushMatrix();
        this.scene.translate(0,-1,-3);
        this.scene.scale(1,1,1.5);
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.rudder3.display();
        this.scene.popMatrix(); 

        //FIO BAIXO
        this.scene.pushMatrix();
        this.scene.translate(0,-0.6,-4.5);
        this.scene.scale(0.3,0.3,1);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.thread.display();
        this.scene.popMatrix();

        //FIO CIMA
        this.scene.pushMatrix();
        this.scene.translate(0,0.6,-4.5);
        this.scene.scale(0.3,0.3,1);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.thread1.display();
        this.scene.popMatrix();

        //BANDEIRA
        this.scene.setActiveShader(this.flagShader);
        this.texture.bind(0);
        this.scene.pushMatrix();
        this.scene.translate(0,0,-6.5);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.scale(2.55,1.35,1.5);
        this.flag.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.flagShader1);
        this.scene.pushMatrix();
        this.scene.translate(0,0,-6.5);
        this.scene.rotate(3*Math.PI/2,0,1,0);
        this.scene.scale(2.55,1.35,1.5);
        this.flag.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }
}


