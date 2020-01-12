#version 150

uniform vec2 u_size;
uniform float u_noise;

out vec4 color;

void main() {

	float green = gl_FragCoord.x / u_size.x;
	float blue = gl_FragCoord.y / u_size.y;

	color = vec4(u_noise, green, blue, 1.0);

}
