# final_dropdown_task

   assignValueAccordingToPropertyType(vProp?:any){
            vProp.fontTypeDisplayName=vProp.fontTypeDisplayName?vProp.fontTypeDisplayName:'San Serif';
            vProp.fontColorDisplayName=vProp.fontColorDisplayName?vProp.fontColorDisplayName:'Black';
            vProp.fontSizeDisplayName=vProp.fontSizeDisplayName?vProp.fontSizeDisplayName:'14';
            vProp.fontFormatDisplayName=vProp.fontFormatDisplayName?vProp.fontFormatDisplayName:['Standard'];
            vProp.fontColorValue=vProp.fontColorValue?vProp.fontColorValue:'Black';
            vProp.entryCellColor=vProp.entryCellColor?vProp.entryCellColor:'Standard';
            if(this.printoutShow || this.parentEntity?.type=="Printout(PO)"){
                vProp.entryCellColor=null;
            }
            if(this.checkPropetyType(vProp)){
                vProp.fontTypeValue=vProp.fontTypeValue?vProp.fontTypeValue:' San Serif';
                vProp.fontSizeValue=vProp.font.fontSizeValue?vProp.fontSizeValue:'14';
                vProp.fontColorValue=vProp.fontColorValue?vProp.fontColorValue:'Black';
                vProp.fontFormatValue=vProp.fontFormatValue?vProp.fontFormatValue:['Standard'];
            }
            else{
                vProp.fontFormatValue=null;
                vProp.fontSizeValue=null;
            }
    }
