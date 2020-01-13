#version 150

uniform sampler2DRect tex0;
in vec2 v_texcoord;
out vec4 color;

void main()
{
    color = texture(tex0, v_texcoord);
}