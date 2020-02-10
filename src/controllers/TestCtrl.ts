import {BodyParams, Controller, Delete, Get, PathParams, Post, Put, QueryParams} from "@tsed/common";
import {Returns} from "@tsed/swagger";
import {Data} from "../models/Data";

@Controller("ctrl")
export class TestCtrl {

  @Get("/:id")
  @Returns(Data)
  async get(
    @PathParams("id") id: number
  ): Promise<Data> {
    return {
      id,
      name: `${id} name`
    };
  }

  @Post("/:id")
  @Returns(Data)
  async post(
    @PathParams("id") id: number,
    @BodyParams("name") name: string
  ): Promise<Data> {
    return {
      id,
      name
    };
  }

  @Put("/:id")
  @Returns(Data)
  async put(
    @PathParams("id") id: number,
    @QueryParams("name") name: string
  ): Promise<Data> {
    return {
      id,
      name
    };
  }

  @Delete("/:id")
  @Returns(Data)
  async delete(
    @PathParams("id") id: number
  ): Promise<Data> {
    return {
      id,
      name: `${id} name`
    };
  }
}
