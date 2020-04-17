/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
    this.quad = new MyQuad(this.scene);
    this.initMaterials();
    }

    initMaterials()
    {
      this.back = new CGFappearance(this.scene);
      this.back.setAmbient(1.0, 1.0, 1.0, 1);
      this.back.setDiffuse(0.0, 0.0, 0.0, 1);
      this.back.setSpecular(0.0, 0.0, 0.0, 1);
      this.back.setShininess(10.0);
      this.back.loadTexture('images/split_cubemap/back.png');
      this.back.setTextureWrap('REPEAT', 'REPEAT');

      this.bottom = new CGFappearance(this.scene);
      this.bottom.setAmbient(1.0, 1.0, 1.0, 1);
      this.bottom.setDiffuse(0.0, 0.0, 0.0, 1);
      this.bottom.setSpecular(0.0, 0.0, 0.0, 1);
      this.bottom.setShininess(10.0);
      this.bottom.loadTexture('images/split_cubemap/bottom.png');
      this.bottom.setTextureWrap('REPEAT', 'REPEAT');

      this.front = new CGFappearance(this.scene);
      this.front.setAmbient(1.0, 1.0, 1.0, 1);
      this.front.setDiffuse(0.0, 0.0, 0.0, 1);
      this.front.setSpecular(0.0, 0.0, 0.0, 1);
      this.front.setShininess(10.0);
      this.front.loadTexture('images/split_cubemap/front.png');
      this.front.setTextureWrap('REPEAT', 'REPEAT');

      this.left = new CGFappearance(this.scene);
      this.left.setAmbient(1.0, 1.0, 1.0, 1);
      this.left.setDiffuse(0.0, 0.0, 0.0, 1);
      this.left.setSpecular(0.0, 0.0, 0.0, 1);
      this.left.setShininess(10.0);
      this.left.loadTexture('images/split_cubemap/left.png');
      this.left.setTextureWrap('REPEAT', 'REPEAT');

      this.right = new CGFappearance(this.scene);
      this.right.setAmbient(1.0, 1.0, 1.0, 1);
      this.right.setDiffuse(0.0, 0.0, 0.0, 1);
      this.right.setSpecular(0.0, 0.0, 0.0, 1);
      this.right.setShininess(10.0);
      this.right.loadTexture('images/split_cubemap/right.png');
      this.right.setTextureWrap('REPEAT', 'REPEAT');

      this.top = new CGFappearance(this.scene);
      this.top.setAmbient(1.0, 1.0, 1.0, 1);
      this.top.setDiffuse(0.0, 0.0, 0.0, 1);
      this.top.setSpecular(0.0, 0.0, 0.0, 1);
      this.top.setShininess(10.0);
      this.top.loadTexture('images/split_cubemap/top.png');
      this.top.setTextureWrap('REPEAT', 'REPEAT');
    }

    display()
    {
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0, 0.5);

        this.back.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        
        this.right.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90*Math.PI/180, 0, 1, 0);
        
        this.left.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        
        this.front.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90*Math.PI/180, 1, 0, 0);
        
        this.top.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        
        this.bottom.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        
	}
}