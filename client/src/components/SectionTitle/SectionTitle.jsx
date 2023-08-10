

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto w-4/12 text-center">
            <p className="text-slate-500">{subHeading}</p>
            <h3 className="text-slate-700 text-4xl uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;