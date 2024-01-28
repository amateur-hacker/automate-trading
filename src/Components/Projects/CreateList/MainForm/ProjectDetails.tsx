import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { FixPrice, Hourly } from "@/Constant";
import { TitlePropsType } from "@/Type/Projects";

const ProjectDetails = ({ errors, register, ProjectRate, ProjectType }: TitlePropsType) => {
  return (
    <>
      {ProjectRate ? (
        <FormGroup>
          <Label>{ProjectRate}</Label>
          <input className="form-control" type="number"  placeholder="Enter project Rate" {...register("rate", { required: true })} />
          <span style={{ color: "red" }}>{errors.rate && "rate is required"} </span>
        </FormGroup>
      ) : (
        <FormGroup>
          <Label>{ProjectType}</Label>
          <Input type="select" name="status" placeholder="Select Status" className="form-control digits">
            <option value="Hourly">{Hourly}</option>
            <option value="Fix Price">{FixPrice} </option>
          </Input>
        </FormGroup>
      )}
    </>
  );
};
export default ProjectDetails;
