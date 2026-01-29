import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function MatchRing({value}){
    return (
        <div className="w-20">
            <CircularProgressbar value={value} text={`${value}%`}/>
        </div>
    );
}