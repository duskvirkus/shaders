#include "ofApp.h"
#include <cassert>

//--------------------------------------------------------------
void ofApp::setup() {

#ifdef TARGET_OPENGLES
	cout << "Project unsupported on this system! Press enter to exit." << '\n';
	cin.get();
	exit(1);
#endif
	assert(ofIsGLProgrammableRenderer());

	ofEnableAlphaBlending();

	img.load("kitten.jpg");
	plane.set(ofGetWidth(), ofGetHeight(), ofGetWidth() / 20, ofGetHeight() / 20, OF_PRIMITIVE_TRIANGLES);
	plane.mapTexCoordsFromTexture(img.getTextureReference());

	shader.load("texture");

}

//--------------------------------------------------------------
void ofApp::update() {
	updateTitle();
}

//--------------------------------------------------------------
void ofApp::updateTitle() {
	stringstream titleStream;
	titleStream << PROJECT_NAME << " - " << CREATOR << " - FPS: " << static_cast<int>(ofGetFrameRate());
	ofSetWindowTitle(titleStream.str());
}

//--------------------------------------------------------------
void ofApp::draw() {

	ofDrawCircle(ofGetMouseX(), ofGetMouseY(), 100);

	img.getTextureReference().bind();
	shader.begin();

		ofPushMatrix();
		ofTranslate(ofGetWidth() / 2, ofGetHeight() / 2);
		plane.draw();
		ofPopMatrix();

	shader.end();
	img.getTextureReference().unbind();

	//img.draw(0, 0);

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key) {

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y) {

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button) {

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button) {

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button) {

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y) {

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y) {

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h) {

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg) {

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo) {

}
