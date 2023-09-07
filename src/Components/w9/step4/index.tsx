import Penalties from "./penalities"
import Certification from "./certification"

export default function Step4(props: any) {

    const {
        handleTaxClassificationChange,
        selectedTaxClassification,
        data,
        handleChange,
        setselectedContinue,
        selectedContinue,
        report,
        handleReportChange
    } = props;

    return (
        <>
            {selectedContinue.step5 ? (
                <Penalties
                    handleChange={handleChange}
                    setselectedContinue={setselectedContinue}


                />
            ) : ("")}

            {selectedContinue.step6 ? (
                <Certification
                    handleChange={handleChange}
                    setselectedContinue={setselectedContinue}


                />
            ) : ("")}




        </>

    )
}