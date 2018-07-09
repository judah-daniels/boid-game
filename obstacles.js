// Obstacle object
function Building(x_, y_, w_, h_, buffer_) {
	this.pos = createVector(x_, y_);
	this.dimensions = createVector(w_, h_);
	this.buffer = buffer_;
}

// Draws the building
Building.prototype.draw = function(camera) {
	fill(200);
	stroke(150);
	strokeWeight(4);
	rect(this.pos.x - camera.x + width/2, this.pos.y - camera.y + height/2, this.dimensions.x, this.dimensions.y);
}


// True if the point is inside the rectangle
function rectContains(pos, x, y, w, h) {
	if (pos.x > x && pos.x < x + w && pos.y > y && pos.y < y + h) {
		return true;
	}
	return false;
}
