import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HostelService } from './hostel.service'; // Corrected import path
import { CreateHostelDto } from '../hostel/dto/create-hostel.dto';

@Controller('hostel')
export class HostelController {
    constructor(private readonly hostelService: HostelService) {}
  
    @Post()
    create(@Body() createHostelDto: CreateHostelDto) {
      return this.hostelService.create(createHostelDto);
    }
  
    @Get()
    findAll() {
      return this.hostelService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.hostelService.findOne(+id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.hostelService.remove(+id);
    }
  }
