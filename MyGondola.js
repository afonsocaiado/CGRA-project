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

        this.defaultMaterial = new CGFappearance(this.scene);
        this.defaultMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.defaultMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.defaultMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.defaultMaterial.setShininess(10.0);
        this.defaultMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.tex = new CGFappearance(this.scene);
        this.tex.setAmbient(1.0, 1.0, 1.0, 1);
        this.tex.setDiffuse(0.0, 0.0, 0.0, 1);
        this.tex.setSpecular(0.0, 0.0, 0.0, 1);
        this.tex.setShininess(10.0);
        this.tex.loadTexture('images/windows.jpg');
        this.tex.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.texSimple = new CGFappearance(this.scene);
        this.texSimple.setAmbient(1.0, 1.0, 1.0, 1);
        this.texSimple.setDiffuse(0.0, 0.0, 0.0, 1);
        this.texSimple.setSpecular(0.0, 0.0, 0.0, 1);
        this.texSimple.setShininess(10.0);
        this.texSimple.loadTexture('images/texSimple.png');
        this.texSimple.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
    }

    display()
    {
        this.scene.pushMatrix();

        this.scene.pushMatrix(); 
        this.tex.apply();       
        this.scene.translate(0,0,0);
        this.scene.scale(0.7,0.7,6);
        this.scene.rotate(180*Math.PI/180, 0, 0, 1);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.cilinder.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.texSimple.apply();
        this.scene.translate(0,0,-3);
        this.scene.scale(0.7,0.7,0.7);
        this.sphere.display();
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0,0,3);
        this.scene.scale(0.7,0.7,0.7);
        this.sphere1.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.defaultMaterial.apply();
        this.scene.translate(0.9,0,-3);
        this.scene.scale(0.3,0.3,0.5);
        this.elipse.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.9,0,-3);
        this.scene.scale(0.3,0.3,0.5);
        this.elipse1.display();      
        this.scene.popMatrix();

        this.scene.pushMatrix(); 
        this.scene.translate(0.9,0,-4);    
        this.helice1.display();        
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.9,0,-4);        
        this.helice2.display();        
        this.scene.popMatrix();
    }
    

    reset()
    {
        this.helice1.reset();
        this.helice2.reset();
    }

    update(val)
    {
        this.helice1.update(val);
        this.helice2.update(val);
    }
}