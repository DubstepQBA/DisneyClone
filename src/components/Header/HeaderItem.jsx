/* eslint-disable react/prop-types */


function HeaderItem({ name, Icon }) {
    return (
        <div className="text-white text-[15px] font-semibold cursor-pointer 
        flex items-center gap-3 hover:underline underline-offset-8 mb-2 "
        >
            <Icon />
            <h2 className="">{name}</h2>
        </div>
    )
}
export default HeaderItem