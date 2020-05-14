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
        
        this.elipse = new MyElipse(this.scene, 16, 8);
        this.gondola = new MyGondola(this.scene);
        this.rudder = new MyRudder(this.scene);
        this.rudder1 = new MyRudder(this.scene);
        this.rudder2 = new MyRudder(this.scene);
        this.rudder3 = new MyRudder(this.scene);
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
    }

    startAutopilot()
    {
        this.autopilot = true;
        this.xAutopilotCenter = this.x + 5 * Math.cos((this.angY + 90)*Math.PI/180);
        this.zAutopilotCenter = this.z + 5 * Math.sin((this.angY + 90)*Math.PI/180);
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
    }


    display()
    {
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);

        this.scene.rotate(this.angY*Math.PI/180, 0, 1, 0);

        this.scene.pushMatrix();
        this.scene.scale(2,2,2);
        this.elipse.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-2.2,0);
        this.scene.scale(0.4,0.4,0.4);
        this.gondola.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1,0,-3);
        this.scene.scale(1,1,1.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.rudder.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(-1,0,-3);
        this.scene.scale(-1,-1,1.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.rudder1.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,1,-3);
        this.scene.scale(1,1,1.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.rudder2.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.scene.translate(0,-1,-3);
        this.scene.scale(1,1,1.5);
        this.scene.rotate(Math.PI,0,0,1);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.rudder3.display();
        this.scene.popMatrix(); 

        this.scene.popMatrix();
    }
}


