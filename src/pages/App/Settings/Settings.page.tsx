import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../../shared-resources/components/Header";
import InputField from "../../../shared-resources/components/InputField";
import LineSeparator from "../../../shared-resources/components/LineSeparator";
import dummyData from "../../../dummy-data/dummyData.json";

interface Props {}

const Settings: React.FC<Props> = function (props: Props) {
    const { Name, Email, CarrierID1, CarrierID2 } = dummyData;
    const formik = useFormik({
        initialValues: {
            Name: Name,
            Email: Email,
            CarrierID1: CarrierID1,
            CarrierID2: CarrierID2,
        },
        validationSchema: Yup.object({
            Name: Yup.string().required("Name is required"),
            Email: Yup.string()
                .email("Invalid email address")
                .required("Valid email is required"),
            CarrierID1: Yup.number(),
            CarrierID2: Yup.number(),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5">
            <Header headerTitle={"User Settings"} />
            <LineSeparator />

            <div className="p-8 max-w-2xl">
                <InputField
                    id="Name"
                    type="text"
                    errors={formik.errors.Name}
                    placeholder="Name"
                    {...formik.getFieldProps("Name")}
                ></InputField>

                <InputField
                    id="Email"
                    type="email"
                    errors={formik.errors.Email}
                    placeholder="email"
                    {...formik.getFieldProps("Email")}
                ></InputField>

                <div className="rounded border-2 pr-8 pl-8 pb-8 ">
                    <Header headerTitle={"Carrier Settings"} />
                    <LineSeparator />

                    <InputField
                        id="CarrierID1"
                        type="number"
                        errors={formik.errors.CarrierID1}
                        placeholder={"Carrier 1 ID"}
                        {...formik.getFieldProps("CarrierID1")}
                    ></InputField>

                    <InputField
                        id="CarrierID1"
                        type="number"
                        errors={formik.errors.CarrierID2}
                        placeholder={"Carrier 2 ID"}
                        {...formik.getFieldProps("CarrierID2")}
                    ></InputField>
                </div>
            </div>
        </form>
    );
};

Settings.defaultProps = {};

export default React.memo(Settings);
