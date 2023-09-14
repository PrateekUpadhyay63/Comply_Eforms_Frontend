import React from "react";
export default function Tab(){
    return(
        <div className="overlay-div">
            <div className="overlay-div-group">
                <div className="viewInstructions"> <label>View Instructions</label></div>
                <div className="viewform"><label>View Form</label> </div>
                <div className="helpvideo"> <label><a target="new" href="https://youtu.be/SqcY0GlETPk?si=KOwsaYzweOessHw-">Help Video</a></label></div>
            </div>
        </div>
    )
}