attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;
uniform float normScale;

void main()
{
	vTextureCoord = aTextureCoord;

    float val = texture2D(uSampler2, vec2(0.0, timeFactor*0.02) + vTextureCoord).b;
    vec3 offset = aVertexNormal*val*0.03;

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
}