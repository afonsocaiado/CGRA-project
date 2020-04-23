/**
 * MyHelice
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHelice extends CGFobject {
	constructor(scene) {
		super(scene);
        this.cilinder = new MyCilinder(this.scene, 16);
        this.sphere = new MySphere(this.scene, 16, 8);
        this.sphere1 = new MySphere(this.scene, 16, 8);
    }

    display()
    {
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
	}
}