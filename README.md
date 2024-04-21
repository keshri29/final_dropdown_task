# final_dropdown_task

      assignValueAccordingToPropertyType(vProp?: any) {
        vProp.fontTypeDisplayName = vProp.fontTypeDisplayName ? vProp.fontTypeDisplayName : 'San Serif';
        vProp.fontColorDisplayName = vProp.fontColorDisplayName ? vProp.fontColorDisplayName : 'Black';
        vProp.fontSizeDisplayName = vProp.fontSizeDisplayName ? vProp.fontSizeDisplayName : '14';
        vProp.fontFormatDisplayName = vProp.fontFormatDisplayName ? vProp.fontFormatDisplayName : ['Standard'];
        vProp.fontColorValue = vProp.fontColorValue ? vProp.fontColorValue : 'Black';
        vProp.entryCellColor = vProp.entryCellColor ? vProp.entryCellColor : 'Standard';
      
        if (this.printoutShow || this.parentEntity?.type === "Printout (PO)") {
          vProp.entryCellColor = null;
        }
      
        if (this.checkPropetyType(vProp)) {
          vProp.fontTypeValue = vProp.fontTypeValue ? vProp.fontTypeValue : 'San Serif';
          vProp.fontSizeValue = vProp.fontSizeValue ? vProp.fontSizeValue : '14';
          vProp.fontColorValue = vProp.fontColorValue ? vProp.fontColorValue : 'Black';
          vProp.fontFormatValue = vProp.fontFormatValue ? vProp.fontFormatValue : ['Standard'];
        } else {
          vProp.fontFormatValue = null;
          vProp.fontSizeValue = null;
        }
      
        if (vProp?.type === this.constantsModelView.checkBox || vProp?.type === this.constantsModelView.barcodeCreate || vProp?.type == this.constantsModelView.Blank_Space || vProp?.type == this.constantsModelView.Model_Property) {
          vProp.fontTypeValue = vProp.fontTypeValue ? vProp.fontTypeValue : 'San Serif';
        
           if(vProp?.property?.type == 'Text(Rich)'){
            vProp.fontTypeValue =null;
           }
           vProp.fontColorValue=null;
        }else{
            vProp.fontTypeValue = null;
        }
      
        if (!this.printoutShow || this.parentEntity?.type === "Printout (PO)") {
          vProp.fontTypeValue = vProp.fontTypeValue ? vProp.fontTypeValue : 'San Serif';
        }
      
        if (vProp?.displayName && (vProp?.displayName?.search('Static Text') !== -1 || vProp?.isStaticText || vProp?.displayName.search('Static Text'))) {
          vProp.fontTypeDisplayName = null;
          vProp.fontTypeValue = null;
          vProp.fontColorDisplayName = null;
          vProp.fontColorValue = null;
          vProp.fontSizeDisplayName = null;
          vProp.fontSizeValue = null;
          vProp.fontFormatDisplayName = null;
          vProp.fontFormatValue = null;
          vProp.entryCellColor = null;
        }
      
        return vProp;
      }
