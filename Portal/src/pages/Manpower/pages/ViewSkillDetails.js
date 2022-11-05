import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PinDropIcon from '@material-ui/icons/PinDrop';

export default function ViewSkillDetails(props) {
    const [data, setData] = useState("");
    const { subdept } = props;

    useEffect(() => {
        const { token } = props;
        const { subdept } = props;
        axios.post('http://localhost:3000/emp/viewSkillDetails', {
            token: token,
            subdept: subdept
        }).then((response) => {
            setData(response.data[0]);
        });
    }, [props]);
    return (
        <>
            {(() => {
                //Melting Locations
                if (subdept === 'Melting') {
                    return (
                        <List component="nav" aria-label="main mailbox folders">
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>PANEL NO-1 Op.: </b> {data.panel_no_1_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>PANEL NO-1 CO-Op.: </b> {data.panel_no_1_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>PANEL NO-1 CHARGE COLLECTOR: </b> {data.panel_no_1_charge_collector}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>PANEL NO-2 Op.: </b> {data.panel_no_2_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>PANEL NO-2 CO-Op.: </b> {data.panel_no_2_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>PANEL NO-3 Op.: </b> {data.panel_no_3_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>PANEL NO-3 CO-Op.: </b> {data.panel_no_3_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SPECTRO COIN & TEST BAR SAMPLE: </b> {data.spectro_coin_test_bar_sample}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CRANE Op.: </b> {data.crane_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SLAG COLLECTOR PANEL-1: </b> {data.slag_collector_panel_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SLAG COLLECTOR PANEL-2</b> {data.slag_collector_panel_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SLAG COLLECTOR PANEL-3</b> {data.slag_collector_panel_3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L3: </b> {data.l3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L2: </b> {data.l2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L1: </b> {data.l1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Total: </b> {data.total}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>
                    )
                    //Arpa 450 Locations
                } else if (subdept === 'Arpa 450') {
                    return (<List component="nav" aria-label="main mailbox folders">
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>COPE M/C Op.: </b> {data.cope_m_c_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>COPE BOX LOADING Op.: </b> {data.cope_box_loading_op}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>DRAG M/C Op.: </b> {data.drag_m_c_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>DRAG BOX LOADING Op.: </b> {data.drag_box_loading_op}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>DRAG BOX UNLOADING Op.: </b> {data.drag_box_unloading_op}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>CORE TRANFER FIXTURE Op.: </b> {data.core_tranfer_fixture_op}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>CORE TRANFER FIXTURE CO-Op.: </b> {data.core_tranfer_fixture_co_op}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>CORE SETTING Op..: </b> {data.core_setting_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>CLAMPING Op. 01: </b> {data.clamping_operator_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>CLAMPING Op. 02: </b> {data.clamping_operator_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>DRAG MOULD VENTING Op.: </b> {data.drag_mould_venting_op}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>VENTING Op. 01: </b> {data.venting_operator_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>VENTING Op. 02: </b> {data.venting_operator_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>BOX CLOSING Op.: </b> {data.box_closing_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>POURING CRANE Op.: </b> {data.pouring_crane_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>POURING Op.: </b> {data.pouring_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>K-OUT Op.: </b> {data.k_out_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>CASTING TRANSFER Op.: </b> {data.casting_transfer_op}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>L3: </b> {data.l3}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>L2: </b> {data.l2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>L1: </b> {data.l1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Total: </b> {data.total}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                    )
                    //WBQ3 Locations
                } else if (subdept === 'W B Q 3') {
                    return (
                        <List component="nav">
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>COPE M/C Op.: </b> {data.cope_m_c_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>COPE M/C CO-Op.: </b> {data.cope_m_c_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>DRAG M/C Op.: </b> {data.drag_m_c_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>DRAG M/C CO-Op.: </b> {data.drag_m_c_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>EMPTY PALLET TRASFER Op.: </b> {data.empty_pallet_trasfer_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>DRAG BOX VENTING Op.: </b> {data.drag_box_venting_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>DRAG CORE SETTING Op.: </b> {data.drag_core_setting_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>COPE CORE SETTING Op.: </b> {data.cope_core_setting_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>VENTING Op. 01: </b> {data.venting_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>VENTING Op. 02: </b> {data.venting_operator_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>VENTING Op. 03: </b> {data.venting_operator_3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>BOX CLOSING Op.: </b> {data.box_closing_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>BOX CLOSING CO-Op.: </b> {data.box_closing_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CLAMPING Op. 01: </b> {data.clamping_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CLAMPING Op. 02: </b> {data.clamping_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>MOLD BOX TRANSFER Op.: </b> {data.mold_box_transfer_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>POURING CRANE Op.: </b> {data.pouring_crane_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>POURING Op.: </b> {data.pouring_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>K-OUT Op.: </b> {data.k_out_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>K-OUT CO-Op.: </b> {data.k_out_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SAND PLANT Op.: </b> {data.sand_plant_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L3: </b> {data.l3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L2: </b> {data.l2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L1: </b> {data.l1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Total: </b> {data.total}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>
                    )
                    //Cold Box Locations
                } else if (subdept === 'Cold Box') {
                    return (<List component="nav" aria-label="main mailbox folders">
                        <Grid container spacing={2}>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.01: </b> {data.cold_box_machineno_01}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.01 Co-Op.: </b> {data.cold_box_machineno_01_co_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.02: </b> {data.cold_box_machineno_02}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.02 Co-Op. 01: </b> {data.cold_box_machineno_02_co_operator_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.02 Co-Op. 02: </b> {data.cold_box_machineno_02_co_operator_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.03: </b> {data.cold_box_machineno_03}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.03 Co-Op.: </b> {data.cold_box_machineno_03_co_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.04: </b> {data.cold_box_machineno_04}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.04 Co-Op.: </b> {data.cold_box_machineno_04_co_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.05: </b> {data.cold_box_machineno_05}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.05 Co-Op. 01: </b> {data.cold_box_machineno_05_co_operator_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.05 Co-Op. 02: </b> {data.cold_box_machineno_05_co_operator_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.06: </b> {data.cold_box_machineno_06}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.06 Co-Op. 01: </b> {data.cold_box_machineno_06_co_operator_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.06 Co-Op. 02: </b> {data.cold_box_machineno_06_co_operator_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.07: </b> {data.cold_box_machineno_07}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.07 Co-Op. 01: </b> {data.cold_box_machineno_07_co_operator_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.07 Co-Op. 02: </b> {data.cold_box_machineno_07_co_operator_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.08: </b> {data.cold_box_machineno_08}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.08 Co-Op.: </b> {data.cold_box_machineno_08_co_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.09: </b> {data.cold_box_machineno_09}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.10: </b> {data.cold_box_machineno_10}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.11: </b> {data.cold_box_machineno_11}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Cold Box Machine No.11 Co-Op.: </b> {data.cold_box_machineno_11_co_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Sand Feeding 01: </b> {data.sand_feeding_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Sand Feeding 02: </b> {data.sand_feeding_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Mixer 900: </b> {data.mixer_900}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Mixer 450: </b> {data.mixer_450}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Painting Skilled Op.: </b> {data.painting_skilled_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Painting Op. 900-01: </b> {data.painting_operator_900_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Painting Op. 900-02: </b> {data.painting_operator_900_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Painting Op. 900-03: </b> {data.painting_operator_900_3}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Painting Skilled Op. Arpa 450: </b> {data.painting_skilled_operator_arpa_450}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Painting Op. Arpa 450: </b> {data.painting_operator_arpa_450}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Skilled Inspector Arpa 450: </b> {data.skilled_inspector_arpa_450}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Oven Skilled Op.: </b> {data.oven_skilled_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Oven Co-Op.: </b> {data.oven_co_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Core Box Cleaning & Vent Changing: </b> {data.core_box_cleaning_vent_changing}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Inspection Arpa 900: </b> {data.inspection_arpa900}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Inspection Co-Op. Arpa 900: </b> {data.inspection_co_operator_arpa_900}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Assembly Op. 450: </b> {data.assembly_operator_450}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Assembly 450 Co-Op.: </b> {data.assembly_450_co_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Tool Change: </b> {data.tool_change}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Venting Skill Op.: </b> {data.venting_skill_operator}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Venting Skill Co-Op. 01: </b> {data.venting_skill_co_operator_1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Venting Skill Co-Op. 02: </b> {data.venting_skill_co_operator_2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>L3: </b> {data.l3}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>L2: </b> {data.l2}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>L1</b> {data.l1}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                            <Grid item sm={6}>
                                <ListItem>
                                    <ListItemIcon>
                                        <PinDropIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <b>Total: </b> {data.total}
                                    </ListItemText>
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>)
                    //Shell Core Locations
                } else if (subdept === 'Shell Core') {
                    return (
                        <List component="nav" aria-label="main mailbox folders">
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.01: </b> {data.shell_machine_no_01}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.02: </b> {data.shell_machine_no_02}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.03: </b> {data.shell_machine_no_03}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.04: </b> {data.shell_machine_no_04}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.05: </b> {data.shell_machine_no_05}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.05 Co-Op.: </b> {data.shell_machine_no_05_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.06: </b> {data.shell_machine_no_06}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.07: </b> {data.shell_machine_no_07}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.08: </b> {data.shell_machine_no_08}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.09: </b> {data.shell_machine_no_09}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.10: </b> {data.shell_machine_no_10}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.12: </b> {data.shell_machine_no_12}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.13: </b> {data.shell_machine_no_13}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.14: </b> {data.shell_machine_no_14}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.15: </b> {data.shell_machine_no_15}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.16: </b> {data.shell_machine_no_16}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.17: </b> {data.shell_machine_no_17}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.19: </b> {data.shell_machine_no_19}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.20: </b> {data.shell_machine_no_20}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.21: </b> {data.shell_machine_no_21}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Shell Machine No.22: </b> {data.shell_machine_no_22}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>JD Head Assembly 01: </b> {data.jd_head_assembly_01}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>JD Head Assembly 02: </b> {data.jd_head_assembly_02}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>JD Head Assembly Co-Op.: </b> {data.jd_head_assembly_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Same Head: </b> {data.same_head}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Same KF Head 01: </b> {data.same_kf_head_01}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Same KF Head Co-Op. 01: </b> {data.same_kf_head_co_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Same KF Head Co-Op. 02: </b> {data.same_kf_head_co_operator_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>TATA 4Sp block: </b> {data.tata_4sp_block}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Core Oven Op.: </b> {data.core_oven_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Core Oven Co-Op. 01: </b> {data.core_oven_co_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Core Oven Co-Op. 02: </b> {data.core_oven_co_operator_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Core Oven Co-Op. 03: </b> {data.core_oven_co_operator_3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Inspection: </b> {data.inspection}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Inspection Co-Op.: </b> {data.inspection_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Assembly Dipping: </b> {data.assembly_dipping}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Tool change: </b> {data.tool_change}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L3: </b> {data.l3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L2: </b> {data.l2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L1: </b> {data.l1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Total: </b> {data.total}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>
                    )
                    //Arpa 900 Locations
                } else if (subdept === 'Arpa 900') {
                    return (
                        <List component="nav" aria-label="main mailbox folders">
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>COPE M/C Op.: </b> {data.cope_m_c_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>M/C CO-Op.(AIR) 01: </b> {data.m_c_co_operator_air_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>M/C CO-Op. 01: </b> {data.m_c_co_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>DRAG M/C Op.: </b> {data.drag_m_c_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>M/C CO-Op.(AIR) 02: </b> {data.m_c_co_operator_air_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>M/C CO-Op. 02: </b> {data.m_c_co_operator_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>DRAG MOULD PAINTING Op.: </b> {data.drag_mould_painting_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CORE SETTING Op. 01: </b> {data.core_setting_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CORE SETTING Op. 02: </b> {data.core_setting_operator_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CORE TRANFER FIXTURE Op.: </b> {data.core_tranfer_fixture_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>BOX CLOSING Op.: </b> {data.box_closing_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>VENTING Op. 01: </b> {data.venting_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>VENTING Op. 02: </b> {data.venting_operator_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>COPE BOX PREPRATION Op.: </b> {data.cope_box_prepration_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CLAMPING Op. 01: </b> {data.clamping_operator_1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CLAMPING Op. 02: </b> {data.clamping_operator_2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>MOLD BOX TRANSFER Op.: </b> {data.mold_box_transfer_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CLAMP & PIN REMOVING Op.: </b> {data.clamp_pin_removing_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>POURING CRANE Op.: </b> {data.pouring_crane_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>POURING Op.: </b> {data.pouring_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>K-OUT CRANE Op.: </b> {data.k_out_crane_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>K-OUT CRANE CO-Op.: </b> {data.k_out_crane_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>K-OUT Op.: </b> {data.k_out_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CASTING TRANSFER Op.: </b> {data.casting_transfer_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>EMPTY BOX TRASFER Op.: </b> {data.empty_box_trasfer_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SAND PLANT Op.: </b> {data.sand_plant_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SAND PLANT CO-Op.: </b> {data.sand_plant_co_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>NEW SAND ADD Op.: </b> {data.new_sand_add_operator}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>COMPACTIBILITY CHECKING Op.: </b> {data.compactibility_checking_op}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L3: </b> {data.l3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L2: </b> {data.l2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L1: </b> {data.l1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Total: </b> {data.total}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>
                    )
                    //Fittling Skills
                } else if (subdept === 'Fettling') {
                    return (
                        <List component="nav" aria-label="main mailbox folders">
                            <Grid container spacing={2}>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>FINAL FETTLING ALL ITEM: </b> {data.final_fettling_all_item}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>AVERAGING: </b> {data.averaging}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>CRANE OPERATING: </b> {data.crane_operating}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>SAMI FINAL FETTLING: </b> {data.sami_final_fettling}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L3: </b> {data.l3}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L2: </b> {data.l2}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>L1: </b> {data.l1}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                                <Grid item sm={6}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PinDropIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <b>Total: </b> {data.total}
                                        </ListItemText>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>
                    )
                } else if (subdept === 'Hand Moulding') {
                    return (
                        <h3>No Skills</h3>
                    )
                }
            })()}
        </>
    );
}
