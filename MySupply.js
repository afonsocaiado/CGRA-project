/**
 * MySupply
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySupply extends CGFobject {
	constructor(scene) {
		super(scene);
    this.quad = new MyQuad(this.scene);
    this.initMaterials();
    }

    initMaterials()
    {
      this.box = new CGFappearance(this.scene);
      this.box.setAmbient(1.0, 1.0, 1.0, 1);
      this.box.setDiffuse(0.0, 0.0, 0.0, 1);
      this.box.setSpecular(0.0, 0.0, 0.0, 1);
      this.box.setShininess(10.0);
      this.box.loadTexture('images/box.png');
      this.box.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
    }

    display()
    {
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0, -0.5);

        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        
        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(-90*Math.PI/180, 0, 1, 0);
        
        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0, 0.5);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        
        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI,0,1,0);
        this.scene.rotate(-90*Math.PI/180, 1, 0, 0);
        
        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        
        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        
	}
}