const Box = ({content}) => {
    return (
        <div className="h-56 w-full bg-gray-100 border border-gray-300 relative">
            <div className="absolute top-[50%] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                <h3 className="lowercase">{content ? content : 'column'}</h3>
            </div>
        </div>
    );
}
 
export default Box;