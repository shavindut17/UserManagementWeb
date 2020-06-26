import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { ImageSnippet } from 'src/app/models/image-snippet.model';
import { ImageService } from 'src/app/services/image.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent implements OnInit {

  @Output() uploadFinishTrigger : EventEmitter<string> =  new EventEmitter();

  selectedFile: ImageSnippet;
  imageUrl : any;


  ngOnInit() {
  }

  constructor(private imageService: ImageService){}

  // private onSuccess() {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'ok';
  // }

  // private onError() {
  //   this.selectedFile.pending = false;
  //   this.selectedFile.status = 'fail';
  //   this.selectedFile.src = '';
  // }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);
  //     this.selectedFile.pending = true;
  //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {
  //         const urlObj = res as any ;
  //         this.imageUrl = urlObj.imageUrl;
  //         this.uploadFinishTrigger.emit(this.imageUrl);
  //         this.onSuccess();
  //       },
  //       (err) => {
  //         this.onError();
  //       });
  //   });

  //   reader.readAsDataURL(file);
  // }


processFile(imageInput: any) {
  this.uploadFinishTrigger.emit('https://img.freepik.com/free-vector/man-male-young-person-icon_24877-30222.jpg?size=338&ext=jpg');
  }



}
