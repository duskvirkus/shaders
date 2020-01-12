#pragma once

#include "ofMain.h"

constexpr const char* PROJECT_NAME = "of-uniform";
constexpr const char* CREATOR = "Violet Graham";

class ofApp : public ofBaseApp {

public:

	ofShader shader;

	void setup();
	void update();
	void updateTitle();
	void draw();

	void keyPressed(int key);
	void keyReleased(int key);
	void mouseMoved(int x, int y);
	void mouseDragged(int x, int y, int button);
	void mousePressed(int x, int y, int button);
	void mouseReleased(int x, int y, int button);
	void mouseEntered(int x, int y);
	void mouseExited(int x, int y);
	void windowResized(int w, int h);
	void dragEvent(ofDragInfo dragInfo);
	void gotMessage(ofMessage msg);

};
