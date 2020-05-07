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

        this.speed = 0;
    }

    reset()
    {
        this.speed = 0;
    }

    update(val)
    {
        this.speed += val;
    }

    display()
    {

        
        this.scene.pushMatrix();
        this.scene.rotate(this.speed*(Math.PI/180)*20, 0, 0, 1);

        this.scene.scale(0.1, 0.2, 0.1);

        this.scene.pushMatrix();
        this.scene.scale(0.7,6,0.7);
        this.cilinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-3,0);
        this.scene.scale(0.7,0.7,0.7);
        this.sphere.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0,3,0);
        this.scene.scale(0.7,0.7,0.7);
        this.sphere1.display();        
        this.scene.popMatrix();
        this.scene.popMatrix();    
    }
}