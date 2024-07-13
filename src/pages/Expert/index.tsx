import React, { useState, useEffect } from "react";
import Navbar from "../LandingPage/components/navbar";
import {
  Card,
  CardHeader,
  CircularProgress,
  Input,
  Image,
  CardBody,
  CardFooter,
  useDisclosure,
  Divider,
  Avatar,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { listOfGoofers } from "./data";

type Props = {};

const Expert = (props: Props) => {
  const [value, setValue] = useState(0);
  const [categorySearch, setCategorySearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const [goferId, setGoferId] = useState<string>("");
  const gofer = listOfGoofers.find((item) => item.id === goferId);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleCategorySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategorySearch(e.target.value);
    setIsLoading(true);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (categorySearch.length > 0) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [categorySearch]);

  const filteredList = listOfGoofers.filter((person) =>
    person.category.toLowerCase().includes(categorySearch.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  const currentItems = filteredList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickedGofer = (id: string) => {
    setGoferId(id);
    onOpen();
  };
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen">
        <div className="md:w-[1100px] w-[90%] text-center">
          <h1 className="text-4xl mb-5 font-bold">Hire an Expert in a minutes. Boom</h1>

          <Input size="lg" placeholder="Select a Category" onChange={handleCategorySearch} />

          {isLoading ? (
            <CircularProgress className="mx-auto mt-14" aria-label="Loading..." />
          ) : (
            categorySearch.length > 0 && (
              <div className="mt-5 ">
                <div className="flex flex-col md:flex-row w-[1100px] p-3 justify-between">
                  {currentItems.map((person, index) => (
                    <div key={index} className="mb-3 mt-4 mx-3 w-[335px] ">
                      <Link to={`/gofer/${person.id}`}>
                        <Card className="max-w-[100%] p-3">
                          <CardHeader className="flex justify-between">
                            {/* <Image
                           alt="nextui logo"
                           height={40}
                           radius="sm"
                           src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                           width={40}
                         /> */}
                            <div className="flex gap-3">
                              <Avatar></Avatar>
                              <div className="flex flex-col">
                                <p className="text-md">{person.name}</p>
                                <p className="text-small text-default-500">{person.profession}</p>
                              </div>
                            </div>

                            <div>
                              <Button
                                className=""
                                size="sm"
                                // onPress={() => handleClickedGofer(person.id)}
                              >
                                View Profile
                              </Button>
                            </div>
                          </CardHeader>
                          {/* <Divider/> */}
                          <CardBody>
                            <p>{person.experience}</p>
                            <p>{person.category}</p>
                            <p>{person.salaryExp}</p>
                          </CardBody>
                          <Divider />
                          <CardFooter>
                            <Link isExternal showAnchorIcon href="">
                              {person.avrRank} {person.age}
                            </Link>
                          </CardFooter>
                        </Card>
                      </Link>
                      <hr />
                    </div>
                  ))}
                </div>
                {currentItems.length === 0 && <p>No results found.</p>}
                {filteredList.length > itemsPerPage && (
                  <div className="mt-5">
                    <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
                      Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <Button
                        key={index}
                        onClick={() => handlePageClick(index + 1)}
                        disabled={currentPage === index + 1}
                        className={`mx-1 ${currentPage === index + 1 ? "font-bold" : ""}`}
                      >
                        {index + 1}
                      </Button>
                    ))}
                    <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
                      Next
                    </Button>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        <Modal isOpen={isOpen} placement="auto" className="w-[800px]" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  {goferId}
                  {gofer ? (
                    <div>
                      {/* Display properties of the gofer object */}
                      <p>Name: {gofer.name}</p>
                      <p>Details: {gofer.category}</p>
                      {/* Add other properties as needed */}
                    </div>
                  ) : (
                    <p>Gofer not found</p>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Expert;
