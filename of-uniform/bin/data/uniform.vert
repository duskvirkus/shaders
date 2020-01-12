#version 150

uniform mat4 modelViewProjectionMatrix;
//uniform vec2 u_resolution;
in vec4 position;

void main() {
	gl_Position = modelViewProjectionMatrix * position;
}
