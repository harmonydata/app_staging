import React from "react";
import { FileUploader } from "react-drag-drop-files";
import "../css/fileUploader.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Typography, Link } from "@mui/material";
import PopperHelp from "./PopperHelp";
function DragDrop({
  filesReceiver,
  fileTypes = ["pdf", "csv", "xlsx", "docx"],
}) {
  return (
    <FileUploader
      children={
        <>
          <PopperHelp
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Typography>
              <p>Harmony supports the following file types:</p>
              <ul>
                <li>
                  Word -{" "}
                  <Link
                    href="https://harmonydata.ac.uk/gad7example.docx"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    download an example Word doc formatted for Harmony
                  </Link>
                </li>
                <li>
                  Excel -{" "}
                  <Link
                    href="https://harmonydata.ac.uk/gad7scaredexample.xlsx"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    download an example Excel spreadsheet formatted for Harmony
                    with two tabs for two questionnaires
                  </Link>
                </li>
                <li>
                  CSV -{" "}
                  <Link
                    href="https://harmonydata.ac.uk/gad7example.csv"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    download an example tab separated CSV file formatted for
                    Harmony
                  </Link>
                </li>
                <li>
                  PDF -{" "}
                  <Link
                    href="https://harmonydata.ac.uk/gad7example.pdf"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    download an example tabular PDF document formatted for
                    Harmony
                  </Link>
                </li>
              </ul>
            </Typography>
          </PopperHelp>
          <UploadFileIcon sx={{ width: "2rem", height: "2rem" }} />
          <div>
            <p>
              <u>Upload</u> or drag and drop any <b>pdf, csv, docx or xlsx</b>{" "}
              file here
            </p>
          </div>
        </>
      }
      classes="drop_zone"
      multiple={true}
      handleChange={filesReceiver}
      name="file"
      types={fileTypes}
    />
  );
}

export default DragDrop;
