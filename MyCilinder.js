class MyCilinder extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} slices - number of slices around Y axis
     */
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;

        this.initBuffers();
    }

    /**
     * @method initBuffers
     * Initializes the sphere buffers
     * TODO: DEFINE TEXTURE COORDINATES
     */
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var divAng = (2 * Math.PI) / this.slices;
        var ang = 0;
        var tex = 0;

        for (let i = 0; i <= this.slices; i++)
        {
            var sinAng = Math.sin(ang);
            var cosAng = Math.cos(ang);

            //--- Vertices coordinates
            this.vertices.push(cosAng, 0, -sinAng);
            this.vertices.push(cosAng, 1, -sinAng);

            //--- Indices
            if (i != 0)
            {
                var turn = 2*i;

                this.indices.push(turn, turn-1, turn-2);
                this.indices.push(turn+1, turn-1, turn);
            }

            //--- Normals
            this.normals.push(cosAng, 0, -sinAng);
            this.normals.push(cosAng, 0, -sinAng);

            //--- Texture Coordinates
            this.texCoords.push(tex, 1);
            this.texCoords.push(tex, 0);

            ang += divAng;
            tex += 1/this.slices;
        }
  
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
  }
