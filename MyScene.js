/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.mySphere = new MySphere(this, 16, 8);
        this.myCilinder = new MyCilinder(this, 6);
        this.myCubeMap = new MyCubeMap(this);
        this.myVehicle = new MyVehicle(this, 16, 8);
        this.myElipse = new MyElipse(this, 16, 8);
        this.myRudder = new MyRudder(this);
        this.myGondola = new MyGondola(this);
        this.myHelice = new MyHelice(this);
        this.myTerrain = new MyTerrain(this);

        //------ Applied Material
        this.defaultMaterial = new CGFappearance(this);
        this.defaultMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.defaultMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.defaultMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.defaultMaterial.setShininess(10.0);
        this.defaultMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.texture1 = new CGFtexture(this, 'images/earth.jpg');
        //-------

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displaySphere = false;
        this.displayCilinder = false;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.ambientLight = 0.3;

        this.selectedTexture = -1;

        this.textures = [this.texture1];

        this.textureIds = { 'Earth': 0}
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(50, 50, 50), vec3.fromValues(0, 0, 0));
    }

    //Function that resets selected texture in quadMaterial
    updateAppliedTexture() {
        this.defaultMaterial.setTexture(this.textures[this.selectedTexture]);
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t)
    {
        this.checkKeys();
        this.myVehicle.update();
    }

    updateTexCoords() {
        this.quad.updateTexCoords(this.texCoords);
    }

    checkKeys()
    {
        var text = "Keys pressed: ";
        var keysPressed = false;


        if (this.gui.isKeyPressed("KeyW"))
        {
            this.myVehicle.accelerate(0.05*this.speedFactor);
            text += " W ";
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyS"))
        {
            this.myVehicle.accelerate(-0.05*this.speedFactor);
             text += " S ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyA"))
        {
            this.myVehicle.turn(5);
            text += " A ";
            keysPressed = true;
        }

         if (this.gui.isKeyPressed("KeyD"))
        {
            this.myVehicle.turn(-5);
            text += " D ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyR"))
        {
            this.myVehicle.reset();
            text += " R ";
            keysPressed=true;
        }

        if (keysPressed)
            console.log(text);
    }
        

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Add global ambient light
        this.setGlobalAmbientLight(this.ambientLight, this.ambientLight, this.ambientLight, 1.0);
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        this.lights[0].update()
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        //this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

        //This sphere does not have defined texture coordinates
        if (this.displaySphere)
            this.mySphere.display();

        if (this.displayCilinder)
            this.myCilinder.display();
        
        this.pushMatrix();

        this.scale(100,100,100);
        this.myCubeMap.display();

        this.popMatrix();

        this.pushMatrix();

        this.translate(0,-50,0);
        this.myTerrain.display();

        this.popMatrix();

        this.defaultMaterial.apply();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        
        this.myVehicle.display();

        //this.myHelice.display();
        //this.myGondola.display();
    
        // ---- END Primitive drawing section
    }
}