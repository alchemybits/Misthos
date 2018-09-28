import "./AddProduct.css";
import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import AttachFile from "@material-ui/icons/AttachFile";
import Palette from "@material-ui/icons/Palette";

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
              <GridItem xs={12} sm={3} md={3}>
                <h4>Regular Image</h4>
                <ImageUpload
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                />
              </GridItem>
              <GridItem xs={12} sm={5} md={5}>
                <GridContainer>
                  <GridItem xs={12} sm={8} md={8}>
                    <CustomInput
                      labelText="Nombre"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-clipboard" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <CustomInput
                      labelText="Cantidad #"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-sort-amount-up" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="SKU"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-cogs" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="UPC"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-cogs" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6} lg={6}>
                    <FormControl
                      style={{ marginTop: "25px" }}
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Status
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select"
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          Status
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Disponible
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          No Disponible
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="4"
                        >
                          Descontinuado
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Escribe una breve descripcion del producto"
                      id="textarea-input"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem
                xs={12}
                sm={4}
                md={4}
                style={{ borderLeft: "1pt dashed lightgrey" }}
              >
                <h4>Variantes</h4>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Color"
                    id="material"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Palette />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Tamaño"
                    id="font-awesome"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <i className="fas fa-expand-arrows-alt" />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Precio"
                    id="font-awesome"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "number",
                      endAdornment: (
                        <InputAdornment position="end">
                          <i className="fas fa-money-bill-alt" />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
              </GridItem>
            </GridContainer>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default template;
