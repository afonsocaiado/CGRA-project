class MyTerrain extends CGFobject {
	constructor(scene) {
		super(scene);
        this.plane = new MyPlane(this.scene, 20);

        this.shader = new CGFshader(this.scene.gl,'shaders/terrain.vert','shaders/terrain.frag');
        this.shader.setUniformsValues({ uSampler2: 1, uSampler3: 2, height: 8});
        
        this.tex = new CGFtexture(this.scene, "images/terrain.jpg");
		this.heightMap = new CGFtexture(this.scene, "images/heightmap.jpg");
	}

    display()
    {
		this.scene.pushMatrix();
        this.scene.setActiveShader(this.shader);
        this.tex.bind(0);
        this.heightMap.bind(2);
        this.scene.rotate(-90*(Math.PI/180), 1, 0, 0);
        this.scene.scale(50, 50, 1);
        this.plane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}