import { HashLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <HashLoader
                color="#494949"
                size={60}
                speedMultiplier={1.1}
            />
        </div>
    );

}