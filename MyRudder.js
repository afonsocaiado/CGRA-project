/**
 * MyRudder
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyRudder extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);

		this.ang = 0;
	}
	
	initBuffers() {
		this.vertices = [
			0.5, 0, 0,	//0
			1, 0, 0,	//1
			0.5, 1, 0,	//2
            1, 1, 0,	//3
            0, 0, 0,  	//4
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,
            2, 3, 1,
            2, 0, 4,
            0, 1, 2,
            1, 3, 2,
            4, 0, 2
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
            0, 0, 1,
            0, 0, 1
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
            1, 0,
            0, 1,
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

	turn(val)
	{	
		this.ang = val * 5;	
	}

	reset()
	{
		this.ang = 0;
	}

	display()
	{
		this.scene.pushMatrix();

		this.scene.rotate(this.ang*(Math.PI/180), 0, 1, 0);
		
		super.display();

		this.scene.popMatrix();
	}
}