import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { RiBusWifiFill, RiDraftLine } from "react-icons/ri";
import { BiSolidBatteryFull } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import dayjs from "dayjs";
import { MdOutlineLocalOffer, MdOutlineSmsFailed } from "react-icons/md";
import { Chip, Tab, Tabs } from "@nextui-org/react";
import { PiFirstAidKitThin } from "react-icons/pi";
import VendorsTable from "@/components/Vendors/vendorsTable";
import CampaignsTable from "@/components/campaigns/campaignsTable";

interface CampaignFormValues {
  campaignName: string;
  jobType: string;
  goferName: string;
  goferRank: string;
  basePay: string;
  jobDuration: string;
}

// Validation Schema
const CampaignSchema = Yup.object().shape({
  campaignName: Yup.string().required("Campaign name is required"),
  jobType: Yup.string().required("Job type is required"),
  goferName: Yup.string().required("Gofer name is required"),
  basePay: Yup.string().required("Base pay is required"),
});

const ProductsPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [previewValues, setPreviewValues] = useState<CampaignFormValues>({
    campaignName: "",
    jobType: "",
    goferName: "",
    goferRank: "",
    basePay: "",
    jobDuration: "",
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (values: CampaignFormValues) => {
    // Submit form values
    console.log(values);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded-xl shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium">Start a new Campaign</h3>
          <p className="text-base text-gray-500">
            Create, Manage and Organize Your Campaigns Catalog with Ease
          </p>
        </div>

        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6",
              cursor: "w-full bg-[#1f2950]",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-[#1f2950] font-bold",
            }}
          >
            <Tab
              key="Start Campaigns"
              title={
                <div className="flex items-center space-x-2">
                  <PiFirstAidKitThin />
                  <span>Start Campaigns</span>
                </div>
              }
            >
              <div className="flex flex-row mt-20">
                <div className="w-[70%]">
                  <div className="mb-4 w-[60%]">
                    <div className="flex flex-row">
                      <h1 className="w-[110px] text-[0.75rem] text-center mt-[-8px]  font-bold">Title & Detils</h1>
                      <div
                        className={`h-1 w-[100px] ${step >= 1 ? "bg-[#1f2950]" : "bg-gray-300"}`}
                      />
                      <h1 className="w-[100px] text-[0.75rem] text-center mt-[-8px]">Gofer details</h1>
                      <div
                        className={`h-1 w-[100px] ${step >= 2 ? "bg-[#202d60]" : "bg-gray-300"}`}
                      />
                           <h1 className="w-[70px] text-center mt-[-10px]">Date</h1>
                      <div
                        className={`h-1 w-[100px] ${step >= 3 ? "bg-[#233682]" : "bg-gray-300"}`}
                      />
                      <h1 className="w-[100px] text-center mt-[-10px]">Finish</h1>
                    </div>
                  </div>

                  <Formik
                    initialValues={previewValues}
                    validationSchema={CampaignSchema}
                    onSubmit={handleFormSubmit}
                  >
                    {({ errors, touched, values }) => {
                      // Update preview values on form change
                      setPreviewValues(values);
                      return (
                        <Form className="w-full space-y-6">
                          {step === 1 && (
                            <div className="ml-5">
                              <div className="mb-4 mt-20">
                                <label
                                  htmlFor="campaignName"
                                  className="block text-sm font-medium mt-4"
                                >
                                  Name of campaign
                                </label>
                                <Field
                                  name="campaignName"
                                  className="mt-5 border rounded-lg p-2 w-[300px]"
                                  placeholder="Start a new campaign"
                                />
                                {errors.campaignName && touched.campaignName ? (
                                  <div className="text-red-500">{errors.campaignName}</div>
                                ) : null}
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="jobType"
                                  className="block text-sm font-medium  mt-10"
                                >
                                  Job Type
                                </label>
                                <Field
                                  name="jobType"
                                  as="select"
                                  className="mt-5 border rounded-lg p-2 w-[300px]"
                                >
                                  <option value="">Select Job Type</option>
                                  <option value="Job 1">Job 1</option>
                                  <option value="Job 2">Job 2</option>
                                  <option value="Job 3">Job 3</option>
                                </Field>
                                {errors.jobType && touched.jobType ? (
                                  <div className="text-red-500">{errors.jobType}</div>
                                ) : null}
                              </div>
                              <div className="flex justify-between">
                                <button
                                  type="button"
                                  className="px-4 py-3 mt-3 bg-[#1f2950] text-white rounded-lg"
                                  onClick={handleNextStep}
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          )}

                          {step === 2 && (
                            <div className="ml-5 w-[80%]">
                              <div className="mb-4 mt-20">
                                <label
                                  htmlFor="goferName"
                                  className="block text-sm font-medium mt-4"
                                >
                                  Search for Gofer name
                                </label>
                                <Field
                                  name="goferName"
                                  className="mt-5 border rounded-lg p-2 w-[300px]"
                                  placeholder="Select Gofer by name"
                                />
                                {errors.goferName && touched.goferName ? (
                                  <div className="text-red-500">{errors.goferName}</div>
                                ) : null}
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="goferRank"
                                  className="block text-sm font-medium mt-4"
                                >
                                  Select by Gofer Rank
                                </label>
                                <Field
                                  name="goferRank"
                                  className="mt-5 border rounded-lg p-2 w-[300px]"
                                  placeholder="Select Gofer by rating"
                                />
                              </div>
                              <div className="flex justify-between">
                                <button
                                  type="button"
                                  className="px-4 py-3 mt-3 bg-[#1f2950] text-white rounded-lg"
                                  onClick={handlePrevStep}
                                >
                                  Previous
                                </button>
                                <button
                                  type="button"
                                  className="px-4 py-3 mt-3 bg-[#1f2950] text-white rounded-lg"
                                  onClick={handleNextStep}
                                >
                                  Next
                                </button>
                              </div>
                            </div>
                          )}

                          {step === 3 && (
                            <div className="ml-5 w-[70%]">
                              <div className="mb-4 mt-20">
                                <label htmlFor="basePay" className="block text-sm font-medium mt-4">
                                  Base pay
                                </label>
                                <Field
                                  name="basePay"
                                  as="select"
                                  className="mt-5 border rounded-lg p-2 w-[300px]"
                                >
                                  <option value="">Describe amount in range</option>
                                  <option value="1000-2000">1000-2000</option>
                                  <option value="2000-3000">2000-3000</option>
                                  <option value="3000-4000">3000-4000</option>
                                </Field>
                                {errors.basePay && touched.basePay ? (
                                  <div className="text-red-500">{errors.basePay}</div>
                                ) : null}
                              </div>
                              <div className="mb-4">
                                <label
                                  htmlFor="jobDuration"
                                  className="block text-sm font-medium mt-4"
                                >
                                  Duration of the job
                                </label>
                                <Field
                                  name="jobDuration"
                                  className="mt-5 border rounded-lg p-2 w-[300px]"
                                  placeholder="Enter job duration"
                                />
                              </div>
                              <div className="flex justify-between">
                                <button
                                  type="button"
                                  className="px-4 py-3 mt-3 bg-[#1f2950] text-white rounded-lg"
                                  onClick={handlePrevStep}
                                >
                                  Previous
                                </button>
                                <button
                                  type="submit"
                                  className="px-4 py-3 mt-3 bg-[#1f2950] text-white rounded-lg"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          )}
                        </Form>
                      );
                    }}
                  </Formik>
                </div>

                <div className="md:w-[25%] base:none mt-[-50px] p-4 rounded-full  min-h-[300px] max-h-[100%] ">
                  {" "}
                  <h3 className="text-lg font-medium mb-5">Preview</h3>
                  <div className="border-2 w-full  rounded-[30px] overflow-hidden">
                    <div className="py-1  bg-[#c2c4cb] ">
                      <div className=" py-2 px-1 flex align-middle justify-between">
                        <h1> {dayjs().format("h:m")}</h1>

                        <div className="flex w-[60px] flex-row justify-between">
                          <GiNetworkBars />
                          <RiBusWifiFill />
                          <BiSolidBatteryFull />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 min-h-[300px] max-h-[100%] ">
                      <h1 className="font-bold text-[0.75rem] ml-2 mt-5">Campaign</h1>

                      <MdOutlineLocalOffer size="4rem" color="" className="mx-auto mt-4" />
                      <p className="font-bold text-[0.75rem] mt-5 ml-2 w-[100px] flex justify-between">
                        <strong>Title:</strong>
                        {previewValues.campaignName}
                      </p>
                      <p className="font-bold text-[0.75rem] mt-3 ml-2 w-[100px] flex justify-between">
                        <strong>Job Type:</strong>
                        {previewValues.jobType}
                      </p>
                      <p className="font-bold text-[0.75rem] mt-3 ml-2 w-[100px] flex justify-between">
                        <strong>Gofer Name:</strong>
                        {previewValues.goferName}
                      </p>
                      <p className="font-bold text-[0.75rem] mt-3 ml-2 w-[100px] flex justify-between">
                        <strong>Gofer Rank:</strong>
                        {previewValues.goferRank}
                      </p>
                      <p className="font-bold text-[0.75rem] mt-3 ml-2 w-[100px] flex justify-between">
                        <strong>Base Pay:</strong>
                        {previewValues.basePay}
                      </p>
                      <p className="font-bold text-[0.75rem] mt-3 ml-2 w-[100px] flex justify-between">
                        <strong>Job Duration:</strong>
                        {previewValues.jobDuration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab
              key="draft"
              title={
                <div className="flex items-center space-x-2">
                  <RiDraftLine />
                  <span>Draft Campaigns</span>
                </div>
              }
            >
               <>
              <div className="mt-10 mb-10">
                <h1 className="font-bold ">Draft Campaigns</h1>
                <p className="font-semibold mt-1 text-[0.75rem]">Manage list of saved campaigns </p>
              </div>
              <div>
                <CampaignsTable />
              </div>
              </>
            </Tab>
            <Tab
              key="Failed"
              title={
                <div className="flex items-center space-x-2">
                  <MdOutlineSmsFailed />
                  <span>Failed Campaigns</span>
                  {/* <Chip size="sm" variant="faded">
                    1
                  </Chip> */}
                </div>
              }
            >
              <>
              <div className="mt-10 mb-10">
                <h1 className="font-bold ">Failed Campaigns</h1>
                <p className="font-semibold mt-1 text-[0.75rem]">Manage list of failed campaigns and resend if its connect to errors</p>
              </div>
              <div>
                <CampaignsTable />
              </div>
              </>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
