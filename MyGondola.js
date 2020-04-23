/**
 * MyGondola
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyGondola extends CGFobject {
	constructor(scene) {
		super(scene);

        this.cilinder = new MyCilinder(this.scene, 16);
        this.sphere = new MySphere(this.scene, 16, 8);
        this.sphere1 = new MySphere(this.scene, 16, 8);

        this.elipse = new MyElipse(this.scene,16,8);
        this.elipse1 = new MyElipse(this.scene,16,8);
        this.helice1 = new MyHelice(this.scene);
        this.helice2 = new MyHelice(this.scene);
    }

    display()
    {
        this.scene.pushMatrix();
        this.scene.pushMatrix();
        
        this.scene.scale(0.7,0.7,6);
        this.scene.rotate(90*Math.PI/180,1,0,0);

        this.cilinder.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.scale(0.7,0.7,0.7);
        this.sphere.display();

        this.scene.popMatrix();

        this.scene.pushMatrix();

        this.scene.scale(0.7,0.7,0.7);
        this.scene.translate(0,0,8.5); 

        this.sphere1.display();
        
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.9,0,0);
        this.scene.scale(0.3,0.3,0.5);
        this.elipse.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.9,0,0);
        this.scene.scale(0.3,0.3,0.5);
        this.elipse1.display();      
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene. translate(1,0.6,-1);
        this.scene.scale(0.1,0.2,0.1); 
        this.scene.rotate(90*Math.PI/180,1,0,0);     
        this.helice1.display();        
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene. translate(-1,0.6,-1);
        this.scene.scale(0.1,0.2,0.1); 
        this.scene.rotate(90*Math.PI/180,1,0,0);         
        this.helice2.display();        
        this.scene.popMatrix();
	}
}