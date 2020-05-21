/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBillboard extends CGFobject {
	constructor(scene) {
		super(scene);

        this.base = new MyPlane(this.scene, 20);
        this.trave = new MyHelice(this.scene);
        this.trave1 = new MyHelice(this.scene);
        this.bar = new MyPlane(this.scene, 20);

        this.top = new CGFappearance(this.scene);
        this.top.setAmbient(1.0, 1.0, 1.0, 1);
        this.top.setDiffuse(0.0, 0.0, 0.0, 1);
        this.top.setSpecular(0.0, 0.0, 0.0, 1);
        this.top.setShininess(10.0);
        this.top.loadTexture('images/billboard.png');
        this.top.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.nDropped = 0;
        this.barShader = new CGFshader(this.scene.gl, "shaders/bar.vert", "shaders/bar.frag");
        this.barShader.setUniformsValues({ nDropped : this.nDropped });
    }

    update()
    {
        this.nDropped++;
        this.barShader.setUniformsValues({ nDropped : this.nDropped});
    }

    reset()
    {
        this.nDropped = 0;
        this.barShader.setUniformsValues({ nDropped : this.nDropped});
    }

    display()
    {
        this.scene.pushMatrix();

        this.scene.translate(10, 9, -17);

        this.scene.pushMatrix(); 
        this.scene.translate(1.9, -2, 0);
        this.scene.scale(1, 1.4, 1);      
        this.trave.display();
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(-1.9, -2, 0);
        this.scene.scale(1, 1.4, 1);      
        this.trave1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();  
        this.top.apply();
        this.scene.scale(4, 2, 2);      
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();  
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(4, 2, 2);      
        this.base.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();  
        this.scene.setActiveShader(this.barShader);
        this.scene.translate(0, -0.5, 0.05);
        this.scene.scale(3, 0.4, 0.4);      
        this.bar.display();
        this.scene.popMatrix(); 
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }
}