const SupplyStates =
{
  INACTIVE: 0,
  FALLING: 1,
  LANDED: 2
};
    
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

    this.x = 0;
    this.y = 7.5;
    this.z = 0;

    this.startTime = 0;
    this.elapsedTime = 0;

    this.state=SupplyStates.INACTIVE;
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

    drop(valx, valz)
    {
      this.x = valx;
      this.z = valz;

      this.state=SupplyStates.FALLING;
    }

    land()
    {
      this.state = SupplyStates.LANDED;
      this.y = 0.5;
    }

    update(t)
    {
      if (this.state == SupplyStates.FALLING)
      {
        if (this.startTime == 0)
          this.startTime = t;
        
        this.elapsedTime = t - this.startTime;

        this.y = 7.5 - this.elapsedTime*0.0033;

        if (this.y <= 0.4)
        {
          this.land();
        }
      }
    }

    reset()
    {
      this.startTime = 0;
      this.elapsedTime = 0;

      this.y = 7.5;

      this.state=SupplyStates.INACTIVE;
    }

    display()
    {
      if (this.state != SupplyStates.INACTIVE)
      {
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);

        this.scene.pushMatrix();
        if (this.state == SupplyStates.FALLING)
          this.scene.translate(0, 0, -0.5);

        else if (this.state == SupplyStates.LANDED)
        {
          this.scene.translate(0, 0, -1);
          this.scene.rotate(90*Math.PI/180, 1, 0, 0)
        }

        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        if (this.state == SupplyStates.FALLING)
        {
          this.scene.translate(-0.5, 0, 0);
          this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        }

        else if (this.state == SupplyStates.LANDED)
        {
          this.scene.translate(-1, 0, 0);
          this.scene.rotate(90*Math.PI/180, 0, 1, 0);
          this.scene.rotate(90*Math.PI/180, 1, 0, 0)
        }

        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        if (this.state == SupplyStates.FALLING)
        {
          this.scene.translate(0.5, 0, 0);
          this.scene.rotate(-90*Math.PI/180, 0, 1, 0);
        }

        else if (this.state == SupplyStates.LANDED)
        {
          this.scene.translate(1, 0, 0);
          this.scene.rotate(-90*Math.PI/180, 0, 1, 0);
          this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        }
        
        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        if (this.state == SupplyStates.FALLING)
        {
          this.scene.translate(0, 0, 0.5);
          this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        }

        else if (this.state == SupplyStates.LANDED)
        {
          this.scene.translate(0, 0, 1);
          this.scene.rotate(180*Math.PI/180, 0, 1, 0);
          this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        }

        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        if (this.state == SupplyStates.FALLING)
        {
          this.scene.translate(0, -0.5, 0);
          this.scene.rotate(Math.PI,0,1,0);
          this.scene.rotate(-90*Math.PI/180, 1, 0, 0);
        }

        if (this.state == SupplyStates.LANDED)
        {
          this.scene.rotate(Math.PI,0,1,0);
          this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        }

        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        if (this.state == SupplyStates.FALLING)
        {
          this.scene.translate(0, 0.5, 0);
          this.scene.rotate(Math.PI, 0, 1, 0);
          this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        }

        else if (this.state == SupplyStates.LANDED)
        {
          this.scene.translate(0, 0, 2);
          this.scene.rotate(180*Math.PI/180, 0, 1, 0);
          this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        }

        this.box.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.quad.display();

        this.scene.popMatrix();

        this.scene.popMatrix();
      }   
	}
}