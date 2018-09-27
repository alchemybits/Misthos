import "./AddProduct.css";
import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import AttachFile from "@material-ui/icons/AttachFile";
import Layers from "@material-ui/icons/Layers";

import CustomFileInput from "components/CustomFileInput/CustomFileInput.jsx";

function template() {
  const { classes } = this.props;
  return (
    <div className="add-product">
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Agregar Producto</h4>
          <p className={classes.cardCategoryWhite}>
            Aqui podras agregar todos los prductos para tu inventario.
          </p>
        </CardHeader>
        <CardBody>
          <div id="file-uploader">
            <div className={classes.title}>
              <h3>File Uploader</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={5} md={5}>
                <h4>Regular Image</h4>
                <ImageUpload
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h4>Avatar</h4>
                <ImageUpload
                  avatar
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h4>Simple Material Input</h4>
                <CustomFileInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Simple chooser..."
                  }}
                />
                <CustomFileInput
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Single File..."
                  }}
                  endButton={{
                    buttonProps: {
                      round: true,
                      color: "primary",
                      justIcon: true,
                      fileButton: true
                    },
                    icon: <AttachFile />
                  }}
                />
                <CustomFileInput
                  multiple
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    placeholder: "Multiple File..."
                  }}
                  endButton={{
                    buttonProps: {
                      round: true,
                      color: "info",
                      justIcon: true,
                      fileButton: true
                    },
                    icon: <Layers />
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default template;
