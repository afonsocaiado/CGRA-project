/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0.5,    //0
			0.5, -0.5, 0.5,	    //1
			0.5, 0.5, 0.5,      //2
            -0.5, 0.5, 0.5,	    //3
            -0.5, -0.5, -0.5,   //4
			0.5, -0.5, -0.5,    //5
			0.5, 0.5, -0.5,     //6
			-0.5, 0.5, -0.5,    //7

			-0.5, -0.5, 0.5,    //0
			0.5, -0.5, 0.5,	    //1
			0.5, 0.5, 0.5,      //2
            -0.5, 0.5, 0.5,	    //3
            -0.5, -0.5, -0.5,   //4
			0.5, -0.5, -0.5,    //5
			0.5, 0.5, -0.5,     //6
			-0.5, 0.5, -0.5,    //7

			-0.5, -0.5, 0.5,    //0
			0.5, -0.5, 0.5,	    //1
			0.5, 0.5, 0.5,      //2
            -0.5, 0.5, 0.5,	    //3
            -0.5, -0.5, -0.5,   //4
			0.5, -0.5, -0.5,    //5
			0.5, 0.5, -0.5,     //6
            -0.5, 0.5, -0.5     //7
		];

		
		this.normals = [
			0, 0, 1, //z
			0, 0, 1, //z
			0, 0, 1, //z
			0, 0, 1, //z
			0, 0, -1, //-z
			0, 0, -1, //-z
			0, 0, -1, //-z
			0, 0, -1, //-z

			0, -1, 0, //-y
			0, -1, 0, //-y
			0, 1, 0, //y
			0, 1, 0, //y
			0, -1, 0, //-y
			0, -1, 0, //-y
			0, 1, 0, //y
			0, 1, 0, //y

			-1, 0, 0, //-x
			1, 0, 0, //x
			1, 0, 0, //x
			-1, 0, 0, //-x
			-1, 0, 0, //-x
			1, 0, 0, //x
			1, 0, 0, //x
			-1, 0, 0, //-x
		];
		

		//Counter-clockwise reference of vertices
		this.indices = [
            //0123
			3, 1, 0,
            3, 2, 1,

            //1562
            2, 5, 1,
            2, 6, 5,

            //4567
            5, 6, 4,
            4, 6, 7,

            //0473
            4, 3, 0,
            7, 3, 4,

            //0154
            1, 4, 0,
            1, 5, 4,
            
            //3267
            6, 2, 3,
			6, 3, 7
			
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
    }
}