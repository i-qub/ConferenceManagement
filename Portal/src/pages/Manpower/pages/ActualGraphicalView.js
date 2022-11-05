import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Typography } from "../../../components/Wrappers/Wrappers";
import ManpowerPopup from "../../../components/Popup/ManpowerPopup";
import ViewManpower from "./ViewManpower";

function ActualGraphicalView(props) {
  const [isLoading, setLoading] = useState(true);
  const [openEmployeesPopup, setOpenEmployeesPopup] = useState(false);
  const [location, setLocation] = useState('');
  const { subdeptManpower } = props;
  const { shift } = props;

  const handleOpen = () => { setOpenEmployeesPopup(true); };

  const handleClickClose = () => { setOpenEmployeesPopup(false); };

  //Melting
  const [panel_no_1_operator, setpanel_no_1_operator] = useState("");
  const [panel_no_1_co_operator, setpanel_no_1_co_operator] = useState("");
  const [panel_no_1_charge_collector, setpanel_no_1_charge_collector] = useState("");
  const [panel_no_2_operator, setpanel_no_2_operator] = useState("");
  const [panel_no_2_co_operator, setpanel_no_2_co_operator] = useState("");
  const [panel_no_3_operator, setpanel_no_3_operator] = useState("");
  const [panel_no_3_co_operator, setpanel_no_3_co_operator] = useState("");
  const [spectro_coin_test_bar_sample, setspectro_coin_test_bar_sample] = useState("");
  const [crane_operator, setcrane_operator] = useState("");
  const [slag_collector_panel_1, setslag_collector_panel_1] = useState("");
  const [slag_collector_panel_2, setslag_collector_panel_2] = useState("");
  const [slag_collector_panel_3, setslag_collector_panel_3] = useState("");

  //Arpa 450
  const [cope_m_c_operator, setcope_m_c_operator] = useState("");
  const [cope_box_loading_op, setcope_box_loading_op] = useState("");
  const [drag_m_c_operator, setdrag_m_c_operator] = useState("");
  const [drag_box_loading_op, setdrag_box_loading_op] = useState("");
  const [drag_box_unloading_op, setdrag_box_unloading_op] = useState("");
  const [core_tranfer_fixture_op, setcore_tranfer_fixture_op] = useState("");
  const [core_tranfer_fixture_co_op, setcore_tranfer_fixture_co_op] = useState("");
  const [core_setting_operator, setcore_setting_operator] = useState("");
  const [clamping_operator_1, setclamping_operator_1] = useState("");
  const [clamping_operator_2, setclamping_operator_2] = useState("");
  const [drag_mould_venting_op, setdrag_mould_venting_op] = useState("");
  const [venting_operator_1, setventing_operator_1] = useState("");
  const [venting_operator_2, setventing_operator_2] = useState("");
  const [box_closing_operator, setbox_closing_operator] = useState("");
  const [pouring_crane_operator, setpouring_crane_operator] = useState("");
  const [pouring_operator, setpouring_operator] = useState("");
  const [k_out_operator, setk_out_operator] = useState("");
  const [casting_transfer_op, setcasting_transfer_op] = useState("");

  //W B Q 3
  const [cope_m_c_co_operator, setcope_m_c_co_operator] = useState("");
  const [drag_m_c_co_operator, setdrag_m_c_co_operator] = useState("");
  const [empty_pallet_trasfer_op, setempty_pallet_trasfer_op] = useState("");
  const [drag_box_venting_op, setdrag_box_venting_op] = useState("");
  const [drag_core_setting_op, setdrag_core_setting_op] = useState("");
  const [cope_core_setting_op, setcope_core_setting_op] = useState("");
  const [venting_operator_3, setventing_operator_3] = useState("");
  const [box_closing_co_operator, setbox_closing_co_operator] = useState("");
  // const [clamping_operator, setclamping_operator] = useState("");
  const [mold_box_transfer_op, setmold_box_transfer_op] = useState("");
  const [k_out_co_operator, setk_out_co_operator] = useState("");
  const [sand_plant_operator, setsand_plant_operator] = useState("");

  //COLD BOX
  const [cold_box_machineno_01, setcold_box_machineno_01] = useState("");
  const [cold_box_machineno_01_co_operator, setcold_box_machineno_01_co_operator] = useState("");
  const [cold_box_machineno_02, setcold_box_machineno_02] = useState("");
  const [cold_box_machineno_02_co_operator_1, setcold_box_machineno_02_co_operator_1] = useState("");
  const [cold_box_machineno_02_co_operator_2, setcold_box_machineno_02_co_operator_2] = useState("");
  const [cold_box_machineno_03, setcold_box_machineno_03] = useState("");
  const [cold_box_machineno_03_co_operator, setcold_box_machineno_03_co_operator] = useState("");
  const [cold_box_machineno_04, setcold_box_machineno_04] = useState("");
  const [cold_box_machineno_04_co_operator, setcold_box_machineno_04_co_operator] = useState("");
  const [cold_box_machineno_05, setcold_box_machineno_05] = useState("");
  const [cold_box_machineno_05_co_operator_1, setcold_box_machineno_05_co_operator_1] = useState("");
  const [cold_box_machineno_05_co_operator_2, setcold_box_machineno_05_co_operator_2] = useState("");
  const [cold_box_machineno_06, setcold_box_machineno_06] = useState("");
  const [cold_box_machineno_06_co_operator_1, setcold_box_machineno_06_co_operator_1] = useState("");
  const [cold_box_machineno_06_co_operator_2, setcold_box_machineno_06_co_operator_2] = useState("");
  const [cold_box_machineno_07, setcold_box_machineno_07] = useState("");
  const [cold_box_machineno_07_co_operator_1, setcold_box_machineno_07_co_operator_1] = useState("");
  const [cold_box_machineno_07_co_operator_2, setcold_box_machineno_07_co_operator_2] = useState("");
  const [cold_box_machineno_08, setcold_box_machineno_08] = useState("");
  const [cold_box_machineno_08_co_operator, setcold_box_machineno_08_co_operator] = useState("");
  const [cold_box_machineno_09, setcold_box_machineno_09] = useState("");
  const [cold_box_machineno_10, setcold_box_machineno_10] = useState("");
  const [cold_box_machineno_11, setcold_box_machineno_11] = useState("");
  const [cold_box_machineno_11_co_operator, setcold_box_machineno_11_co_operator] = useState("");
  const [sand_feeding_1, setsand_feeding_1] = useState("");
  const [sand_feeding_2, setsand_feeding_2] = useState("");
  const [mixer_900, setmixer_900] = useState("");
  const [mixer_450, setmixer_450] = useState("");
  const [painting_skilled_operator, setpainting_skilled_operator] = useState("");
  const [painting_operator_900_1, setpainting_operator_900_1] = useState("");
  const [painting_operator_900_2, setpainting_operator_900_2] = useState("");
  const [painting_operator_900_3, setpainting_operator_900_3] = useState("");
  const [painting_skilled_operator_arpa_450, setpainting_skilled_operator_arpa_450] = useState("");
  const [painting_operator_arpa_450, setpainting_operator_arpa_450] = useState("");
  const [skilled_inspector_arpa_450, setskilled_inspector_arpa_450] = useState("");
  const [oven_skilled_operator, setoven_skilled_operator] = useState("");
  const [oven_co_operator, setoven_co_operator] = useState("");
  const [core_box_cleaning_vent_changing, setcore_box_cleaning_vent_changing] = useState("");
  const [inspection_arpa900, setinspection_arpa900] = useState("");
  const [inspection_co_operator_arpa_900, setinspection_co_operator_arpa_900] = useState("");
  const [assembly_operator_450, setassembly_operator_450] = useState("");
  const [assembly_450_co_operator, setassembly_450_co_operator] = useState("");
  const [tool_change, settool_change] = useState("");
  const [venting_skill_operator, setventing_skill_operator] = useState("");
  const [venting_skill_co_operator_1, setventing_skill_co_operator_1] = useState("");
  const [venting_skill_co_operator_2, setventing_skill_co_operator_2] = useState("");

  //Shell Core
  const [shell_machine_no_01, setshell_machine_no_01] = useState("");
  const [shell_machine_no_02, setshell_machine_no_02] = useState("");
  const [shell_machine_no_03, setshell_machine_no_03] = useState("");
  const [shell_machine_no_04, setshell_machine_no_04] = useState("");
  const [shell_machine_no_05, setshell_machine_no_05] = useState("");
  const [shell_machine_no_05_co_operator, setshell_machine_no_05_co_operator] = useState("");
  const [shell_machine_no_06, setshell_machine_no_06] = useState("");
  const [shell_machine_no_07, setshell_machine_no_07] = useState("");
  const [shell_machine_no_08, setshell_machine_no_08] = useState("");
  const [shell_machine_no_09, setshell_machine_no_09] = useState("");
  const [shell_machine_no_10, setshell_machine_no_10] = useState("");
  const [shell_machine_no_12, setshell_machine_no_12] = useState("");
  const [shell_machine_no_13, setshell_machine_no_13] = useState("");
  const [shell_machine_no_14, setshell_machine_no_14] = useState("");
  const [shell_machine_no_15, setshell_machine_no_15] = useState("");
  const [shell_machine_no_16, setshell_machine_no_16] = useState("");
  const [shell_machine_no_17, setshell_machine_no_17] = useState("");
  const [shell_machine_no_19, setshell_machine_no_19] = useState("");
  const [shell_machine_no_20, setshell_machine_no_20] = useState("");
  const [shell_machine_no_21, setshell_machine_no_21] = useState("");
  const [shell_machine_no_22, setshell_machine_no_22] = useState("");
  const [jd_head_assembly_01, setjd_head_assembly_01] = useState("");
  const [jd_head_assembly_02, setjd_head_assembly_02] = useState("");
  const [jd_head_assembly_co_operator, setjd_head_assembly_co_operator] = useState("");
  const [same_head, setsame_head] = useState("");
  const [same_kf_head_01, setsame_kf_head_01] = useState("");
  const [same_kf_head_co_operator_1, setsame_kf_head_co_operator_1] = useState("");
  const [same_kf_head_co_operator_2, setsame_kf_head_co_operator_2] = useState("");
  const [tata_4sp_block, settata_4sp_block] = useState("");
  const [core_oven_operator, setcore_oven_operator] = useState("");
  const [core_oven_co_operator_1, setcore_oven_co_operator_1] = useState("");
  const [core_oven_co_operator_2, setcore_oven_co_operator_2] = useState("");
  const [core_oven_co_operator_3, setcore_oven_co_operator_3] = useState("");
  const [inspection, setinspection] = useState("");
  const [inspection_co_operator, setinspection_co_operator] = useState("");
  const [assembly_dipping, setassembly_dipping] = useState("");

  //Arpa 900
  const [m_c_co_operator_air_1, setm_c_co_operator_air_1] = useState("");
  const [m_c_co_operator_1, setm_c_co_operator_1] = useState("");
  const [m_c_co_operator_air_2, setm_c_co_operator_air_2] = useState("");
  const [m_c_co_operator_2, setm_c_co_operator_2] = useState("");
  const [drag_mould_painting_op, setdrag_mould_painting_op] = useState("");
  const [core_setting_operator_1, setcore_setting_operator_1] = useState("");
  const [core_setting_operator_2, setcore_setting_operator_2] = useState("");
  const [cope_box_prepration_op, setcope_box_prepration_op] = useState("");
  const [clamp_pin_removing_op, setclamp_pin_removing_op] = useState("");
  const [k_out_crane_operator, setk_out_crane_operator] = useState("");
  const [k_out_crane_co_operator, setk_out_crane_co_operator] = useState("");
  const [empty_box_trasfer_op, setempty_box_trasfer_op] = useState("");
  const [sand_plant_co_operator, setsand_plant_co_operator] = useState("");
  const [new_sand_add_operator, setnew_sand_add_operator] = useState("");
  const [compactibility_checking_op, setcompactibility_checking_op] = useState("");

  //Hand Moulding
  const [hand_moulding, sethand_moulding] = useState("");

  //Fettling
  const [final_fettling_all_item, setfinal_fettling_all_item] = useState("");
  const [averaging, setaveraging] = useState("");
  const [crane_operating, setcrane_operating] = useState("");
  const [sami_final_fettling, setsami_final_fettling] = useState("");

  useEffect(() => {
    const { subdeptManpower } = props;
    const { shift } = props;

    //Melting
    if (subdeptManpower === 'Melting') {
      axios.post('http://localhost:3000/graphical/getAllocation_panel_no_1_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpanel_no_1_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_panel_no_1_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpanel_no_1_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_panel_no_1_charge_collector', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpanel_no_1_charge_collector(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_panel_no_2_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpanel_no_2_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_panel_no_2_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpanel_no_2_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_panel_no_3_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpanel_no_3_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_panel_no_3_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpanel_no_3_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_spectro_coin_test_bar_sample', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setspectro_coin_test_bar_sample(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_crane_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcrane_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_slag_collector_panel_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setslag_collector_panel_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_slag_collector_panel_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setslag_collector_panel_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_slag_collector_panel_3', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setslag_collector_panel_3(response.data); setLoading(false); });
    }
    //Arpa 450
    else if (subdeptManpower === 'Arpa 450') {
      axios.post('http://localhost:3000/graphical/getAllocation_cope_m_c_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcope_m_c_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cope_box_loading_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcope_box_loading_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_m_c_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_m_c_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_box_loading_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_box_loading_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_box_unloading_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_box_unloading_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_tranfer_fixture_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_tranfer_fixture_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_tranfer_fixture_co_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_tranfer_fixture_co_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_setting_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_setting_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_clamping_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setclamping_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_clamping_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setclamping_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_mould_venting_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_mould_venting_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_box_closing_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setbox_closing_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_pouring_crane_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpouring_crane_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_pouring_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpouring_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_k_out_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setk_out_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_casting_transfer_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcasting_transfer_op(response.data); setLoading(false); });
    }
    //W B Q 3
    else if (subdeptManpower === 'W B Q 3') {
      axios.post('http://localhost:3000/graphical/getAllocation_cope_m_c_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcope_m_c_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cope_m_c_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcope_m_c_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_m_c_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_m_c_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_m_c_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_m_c_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_empty_pallet_trasfer_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setempty_pallet_trasfer_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_box_venting_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_box_venting_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_core_setting_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_core_setting_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cope_core_setting_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcope_core_setting_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_operator_3', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_operator_3(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_box_closing_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setbox_closing_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_box_closing_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setbox_closing_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_clamping_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setclamping_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_clamping_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setclamping_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_mold_box_transfer_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setmold_box_transfer_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_pouring_crane_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpouring_crane_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_pouring_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpouring_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_k_out_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setk_out_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_k_out_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setk_out_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_sand_plant_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsand_plant_operator(response.data); setLoading(false); });
    }
    //Cold Box
    else if (subdeptManpower === 'Cold Box') {
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_01', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_01(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_01_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_01_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_02', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_02(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_02_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_02_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_02_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_02_co_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_03', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_03(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_03_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_03_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_04', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_04(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_04_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_04_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_05', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_05(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_05_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_05_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_05_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_05_co_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_06', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_06(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_06_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_06_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_06_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_06_co_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_07', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_07(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_07_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_07_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_07_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_07_co_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_08', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_08(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_08_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_08_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_09', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_09(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_10', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_10(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_11', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_11(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cold_box_machineno_11_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcold_box_machineno_11_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_sand_feeding_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsand_feeding_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_sand_feeding_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsand_feeding_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_mixer_900', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setmixer_900(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_mixer_450', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setmixer_450(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_painting_skilled_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpainting_skilled_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_painting_operator_900_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpainting_operator_900_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_painting_operator_900_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpainting_operator_900_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_painting_operator_900_3', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpainting_operator_900_3(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_painting_skilled_operator_arpa_450', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpainting_skilled_operator_arpa_450(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_painting_operator_arpa_450', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpainting_operator_arpa_450(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_skilled_inspector_arpa_450', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setskilled_inspector_arpa_450(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_oven_skilled_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setoven_skilled_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_oven_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setoven_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_box_cleaning_vent_changing', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_box_cleaning_vent_changing(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_inspection_arpa900', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setinspection_arpa900(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_inspection_co_operator_arpa_900', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setinspection_co_operator_arpa_900(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_assembly_operator_450', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setassembly_operator_450(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_assembly_450_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setassembly_450_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_tool_change', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { settool_change(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_skill_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_skill_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_skill_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_skill_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_skill_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_skill_co_operator_2(response.data); setLoading(false); });
    }
    //Shell Core
    else if (subdeptManpower === 'Shell Core') {
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_01', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_01(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_02', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_02(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_03', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_03(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_04', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_04(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_05', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_05(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_05_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_05_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_06', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_06(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_07', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_07(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_08', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_08(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_09', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_09(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_10', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_10(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_12', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_12(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_13', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_13(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_14', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_14(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_15', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_15(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_16', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_16(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_17', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_17(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_19', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_19(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_20', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_20(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_21', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_21(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_shell_machine_no_22', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setshell_machine_no_22(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_jd_head_assembly_01', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setjd_head_assembly_01(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_jd_head_assembly_02', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setjd_head_assembly_02(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_jd_head_assembly_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setjd_head_assembly_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_same_head', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsame_head(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_same_kf_head_01', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsame_kf_head_01(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_same_kf_head_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsame_kf_head_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_same_kf_head_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsame_kf_head_co_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_tata_4sp_block', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { settata_4sp_block(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_oven_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_oven_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_oven_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_oven_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_oven_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_oven_co_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_oven_co_operator_3', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_oven_co_operator_3(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_inspection', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setinspection(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_inspection_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setinspection_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_assembly_dipping', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setassembly_dipping(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_tool_change', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { settool_change(response.data); setLoading(false); });
    }
    //Arpa 900
    else if (subdeptManpower === 'Arpa 900') {
      axios.post('http://localhost:3000/graphical/getAllocation_cope_m_c_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcope_m_c_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_m_c_co_operator_air_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setm_c_co_operator_air_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_m_c_co_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setm_c_co_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_m_c_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_m_c_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_m_c_co_operator_air_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setm_c_co_operator_air_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_m_c_co_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setm_c_co_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_drag_mould_painting_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setdrag_mould_painting_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_setting_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_setting_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_setting_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_setting_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_core_tranfer_fixture_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcore_tranfer_fixture_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_box_closing_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setbox_closing_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_venting_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setventing_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_cope_box_prepration_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcope_box_prepration_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_clamping_operator_1', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setclamping_operator_1(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_clamping_operator_2', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setclamping_operator_2(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_mold_box_transfer_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setmold_box_transfer_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_clamp_pin_removing_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setclamp_pin_removing_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_pouring_crane_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpouring_crane_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_pouring_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setpouring_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_k_out_crane_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setk_out_crane_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_k_out_crane_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setk_out_crane_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_k_out_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setk_out_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_casting_transfer_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcasting_transfer_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_empty_box_trasfer_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setempty_box_trasfer_op(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_sand_plant_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsand_plant_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_sand_plant_co_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsand_plant_co_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_new_sand_add_operator', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setnew_sand_add_operator(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_compactibility_checking_op', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcompactibility_checking_op(response.data); setLoading(false); });
    }
    //Fettling  
    else if (subdeptManpower === 'Fettling') {
      axios.post('http://localhost:3000/graphical/getAllocation_final_fettling_all_item', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setfinal_fettling_all_item(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_averaging', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setaveraging(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_crane_operating', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setcrane_operating(response.data); });
      axios.post('http://localhost:3000/graphical/getAllocation_sami_final_fettling', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { setsami_final_fettling(response.data); setLoading(false); });
    }
    //Hand Moulding  
    else if (subdeptManpower === 'Hand Moulding') {
      axios.post('http://localhost:3000/graphical/getAllocation_hand_moulding', { subdeptManpower: subdeptManpower, shift: shift, verified: 'YES' })
        .then((response) => { sethand_moulding(response.data); setLoading(false); });
    }
  }, [props]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      {(() => {
        if (subdeptManpower === 'Shell Core') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (shell_machine_no_01 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_02 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_03 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_04 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.04'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.04</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.04'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.04</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_05 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.05'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.05</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.05'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.05</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_05_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.05 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.05 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.05 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.05 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_06 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.06'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.06</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.06'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.06</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_07 !== '') {
                  return (
                    <>
                      <h1>{shell_machine_no_07}</h1>
                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.07'); }}>
                          <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.07</Typography></CardContent></CardActionArea>
                        </Card>
                      </Grid>
                    </>
                  )
                } else {
                  return (
                    <>
                      <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.07'); }}>
                          <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.07</Typography></CardContent></CardActionArea>
                        </Card>
                      </Grid>
                    </>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_08 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.08'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.08</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.08'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.08</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_09 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.09'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.09</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.09'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.09</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_10 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.10'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.10</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.10'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.10</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_12 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.12'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.12</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.12'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.12</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_13 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.13'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.13</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.13'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.13</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_14 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.14'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.14</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.14'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.14</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_15 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.15'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.15</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.15'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.15</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_16 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.16'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.16</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.16'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.16</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_17 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.17'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.17</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.17'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.17</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_19 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.19'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.19</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.19'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.19</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_20 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.20'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.20</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.20'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.20</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_21 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.21'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.21</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.21'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.21</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (shell_machine_no_22 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.22'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.22</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Shell Machine No.22'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Shell Machine No.22</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (jd_head_assembly_01 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('JD Head Assembly 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>JD Head Assembly 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('JD Head Assembly 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>JD Head Assembly 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (jd_head_assembly_02 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('JD Head Assembly 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>JD Head Assembly 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('JD Head Assembly 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>JD Head Assembly 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (jd_head_assembly_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('JD Head Assembly Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>JD Head Assembly Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('JD Head Assembly Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>JD Head Assembly Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (same_head !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same Head'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same Head</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same Head'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same Head</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (same_kf_head_01 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same KF Head 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same KF Head 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same KF Head 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same KF Head 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (same_kf_head_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same KF Head Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same KF Head Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same KF Head Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same KF Head Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (same_kf_head_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same KF Head Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same KF Head Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Same KF Head Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Same KF Head Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (tata_4sp_block !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('TATA 4Sp block'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>TATA 4Sp block</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('TATA 4Sp block'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>TATA 4Sp block</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_oven_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_oven_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_oven_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_oven_co_operator_3 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Co-Op. 03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Co-Op. 03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Oven Co-Op. 03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Oven Co-Op. 03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (inspection !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (inspection_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (assembly_dipping !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Assembly Dipping'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Assembly Dipping</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Assembly Dipping'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Assembly Dipping</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (tool_change !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Tool change'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Tool change</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Tool change'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Tool change</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        } else if (subdeptManpower === 'Cold Box') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (cold_box_machineno_01 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_01_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.01 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.01 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.01 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.01 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_02 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_02_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.02 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.02 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.02 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.02 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_02_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.02 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.02 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.02 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.02 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_03 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_03_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.03 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.03 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.03 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.03 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_04 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.04'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.04</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.04'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.04</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_04_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.04 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.04 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.04 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.04 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_05 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.05'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.05</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.05'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.05</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_05_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.05 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.05 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.05 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.05 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_05_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.05 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.05 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.05 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.05 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_06 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.06'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.06</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.06'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.06</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_06_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.06 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.06 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.06 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.06 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_06_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.06 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.06 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.06 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.06 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_07 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.07'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.07</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.07'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.07</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_07_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.07 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.07 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.07 Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.07 Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_07_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.07 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.07 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.07 Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.07 Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_08 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.08'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.08</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.08'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.08</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_08_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.08 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.08 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.08 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.08 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_09 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.09'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.09</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.09'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.09</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_10 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.10'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.10</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.10'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.10</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_11 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.11'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.11</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.11'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.11</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cold_box_machineno_11_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.11 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.11 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Cold Box Machine No.11 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Cold Box Machine No.11 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (sand_feeding_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Sand Feeding 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Sand Feeding 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Sand Feeding 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Sand Feeding 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (sand_feeding_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Sand Feeding 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Sand Feeding 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Sand Feeding 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Sand Feeding 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (mixer_900 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Mixer 900'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Mixer 900</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Mixer 900'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Mixer 900</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (mixer_450 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Mixer 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Mixer 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Mixer 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Mixer 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (painting_skilled_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Skilled Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Skilled Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Skilled Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Skilled Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (painting_operator_900_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. 900-01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. 900-01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. 900-01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. 900-01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (painting_operator_900_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. 900-02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. 900-02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. 900-02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. 900-02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (painting_operator_900_3 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. 900-03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. 900-03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. 900-03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. 900-03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (painting_operator_arpa_450 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. Arpa 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. Arpa 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Op. Arpa 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Op. Arpa 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (skilled_inspector_arpa_450 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Skilled Inspector Arpa 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Skilled Inspector Arpa 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Skilled Inspector Arpa 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Skilled Inspector Arpa 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (oven_skilled_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Oven Skilled Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Oven Skilled Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Oven Skilled Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Oven Skilled Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (oven_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Oven Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Oven Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Oven Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Oven Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (inspection_arpa900 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection Arpa 900'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection Arpa 900</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection Arpa 900'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection Arpa 900</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (inspection_co_operator_arpa_900 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection Co-Op. Arpa 900'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection Co-Op. Arpa 900</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Inspection Co-Op. Arpa 900'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Inspection Co-Op. Arpa 900</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (assembly_operator_450 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Assembly Op. 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Assembly Op. 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Assembly Op. 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Assembly Op. 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (assembly_450_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Assembly 450 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Assembly 450 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Assembly 450 Co-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Assembly 450 Co-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (tool_change !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Tool Change'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Tool Change</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Tool Change'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Tool Change</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_skill_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Venting Skill Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Venting Skill Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Venting Skill Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Venting Skill Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_skill_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Venting Skill Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Venting Skill Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Venting Skill Co-Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Venting Skill Co-Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_skill_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Venting Skill Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Venting Skill Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Venting Skill Co-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Venting Skill Co-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (painting_skilled_operator_arpa_450 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Skilled Op. Arpa 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Skilled Op. Arpa 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Painting Skilled Op. Arpa 450'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Painting Skilled Op. Arpa 450</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_box_cleaning_vent_changing !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Box Cleaning & Vent Changing'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Box Cleaning & Vent Changing</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Core Box Cleaning & Vent Changing'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Core Box Cleaning & Vent Changing</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        } else if (subdeptManpower === 'Arpa 900') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (cope_m_c_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (m_c_co_operator_air_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op.(AIR) 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op.(AIR) 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op.(AIR) 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op.(AIR) 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (m_c_co_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_m_c_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (m_c_co_operator_air_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op.(AIR) 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op.(AIR) 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op.(AIR) 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op.(AIR) 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (m_c_co_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('M/C CO-Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>M/C CO-Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_mould_painting_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG MOULD PAINTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG MOULD PAINTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG MOULD PAINTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG MOULD PAINTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_setting_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE SETTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE SETTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE SETTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE SETTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_setting_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE SETTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE SETTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE SETTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE SETTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (box_closing_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cope_box_prepration_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE BOX PREPRATION Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE BOX PREPRATION Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE BOX PREPRATION Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE BOX PREPRATION Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (clamping_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (clamping_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (mold_box_transfer_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('MOLD BOX TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>MOLD BOX TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('MOLD BOX TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>MOLD BOX TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (clamp_pin_removing_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMP & PIN REMOVING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMP & PIN REMOVING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMP & PIN REMOVING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMP & PIN REMOVING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (pouring_crane_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (pouring_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (k_out_crane_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (k_out_crane_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT CRANE CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT CRANE CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT CRANE CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT CRANE CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (k_out_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (casting_transfer_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CASTING TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CASTING TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CASTING TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CASTING TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (empty_box_trasfer_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('EMPTY BOX TRASFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>EMPTY BOX TRASFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('EMPTY BOX TRASFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>EMPTY BOX TRASFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (sand_plant_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAND PLANT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAND PLANT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAND PLANT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAND PLANT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (sand_plant_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAND PLANT CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAND PLANT CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAND PLANT CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAND PLANT CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (new_sand_add_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('NEW SAND ADD Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>NEW SAND ADD Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('NEW SAND ADD Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>NEW SAND ADD Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (compactibility_checking_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COMPACTIBILITY CHECKING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COMPACTIBILITY CHECKING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COMPACTIBILITY CHECKING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COMPACTIBILITY CHECKING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_tranfer_fixture_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE TRANFER FIXTURE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE TRANFER FIXTURE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE TRANFER FIXTURE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE TRANSFER FIXTURE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        } else if (subdeptManpower === 'Arpa 450') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (cope_m_c_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cope_box_loading_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE BOX LOADING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE BOX LOADING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE BOX LOADING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE BOX LOADING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_m_c_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_box_loading_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG BOX LOADING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG BOX LOADING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG BOX LOADING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG BOX LOADING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_box_unloading_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG BOX UNLOADING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG BOX UNLOADING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG BOX UNLOADING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG BOX UNLOADING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_tranfer_fixture_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE TRANFER FIXTURE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE TRANFER FIXTURE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE TRANFER FIXTURE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE TRANFER FIXTURE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_setting_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE SETTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE SETTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE SETTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE SETTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (clamping_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (clamping_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_mould_venting_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG MOULD VENTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG MOULD VENTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG MOULD VENTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG MOULD VENTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (box_closing_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (pouring_crane_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (pouring_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (k_out_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (casting_transfer_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CASTING TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CASTING TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CASTING TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CASTING TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (core_tranfer_fixture_co_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE TRANFER FIXTURE CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE TRANFER FIXTURE CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CORE TRANFER FIXTURE CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CORE TRANFER FIXTURE CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        } else if (subdeptManpower === 'W B Q 3') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (cope_m_c_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cope_m_c_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE M/C CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE M/C CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_m_c_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_m_c_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG M/C CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG M/C CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (empty_pallet_trasfer_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('EMPTY PALLET TRASFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>EMPTY PALLET TRASFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('EMPTY PALLET TRASFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>EMPTY PALLET TRASFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_box_venting_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG BOX VENTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG BOX VENTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG BOX VENTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG BOX VENTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (drag_core_setting_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG CORE SETTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG CORE SETTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('DRAG CORE SETTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>DRAG CORE SETTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (cope_core_setting_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE CORE SETTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE CORE SETTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('COPE CORE SETTING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>COPE CORE SETTING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (venting_operator_3 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('VENTING Op. 03'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>VENTING Op. 03</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (box_closing_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (box_closing_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('BOX CLOSING CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>BOX CLOSING CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (clamping_operator_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 01'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 01</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (clamping_operator_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CLAMPING Op. 02'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CLAMPING Op. 02</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (mold_box_transfer_op !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('MOLD BOX TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>MOLD BOX TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('MOLD BOX TRANSFER Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>MOLD BOX TRANSFER Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (pouring_crane_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (pouring_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('POURING Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>POURING Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (k_out_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (k_out_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('K-OUT CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>K-OUT CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (sand_plant_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAND PLANT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAND PLANT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAND PLANT Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAND PLANT Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        } else if (subdeptManpower === 'Hand Moulding') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (hand_moulding !== '') {
                  return (
                    <Grid item xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Hand Moulding'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Hand Moulding</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('Hand Moulding'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>Hand Moulding</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        } else if (subdeptManpower === 'Melting') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (panel_no_1_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-1 Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-1 Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-1 Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-1 Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (panel_no_1_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-1 CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-1 CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-1 CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-1 CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (panel_no_2_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-2 Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-2 Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-2 Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-2 Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (panel_no_2_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-2 CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-2 CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-2 CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-2 CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (panel_no_3_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-3 Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-3 Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-3 Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-3 Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (panel_no_3_co_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-3 CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-3 CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-3 CO-Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-3 CO-Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (crane_operator !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CRANE Op.'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CRANE Op</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (slag_collector_panel_1 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SLAG COLLECTOR PANEL-1'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SLAG COLLECTOR PANEL-1</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SLAG COLLECTOR PANEL-1'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SLAG COLLECTOR PANEL-1</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (slag_collector_panel_2 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SLAG COLLECTOR PANEL-2'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SLAG COLLECTOR PANEL-2</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SLAG COLLECTOR PANEL-2'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SLAG COLLECTOR PANEL-2</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (slag_collector_panel_3 !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SLAG COLLECTOR PANEL-3'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SLAG COLLECTOR PANEL-3</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SLAG COLLECTOR PANEL-3'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SLAG COLLECTOR PANEL-3</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (panel_no_1_charge_collector !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-1 CHARGE COLLECTOR'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-1 CHARGE COLLECTOR</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('PANEL NO-1 CHARGE COLLECTOR'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>PANEL NO-1 CHARGE COLLECTOR</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (spectro_coin_test_bar_sample !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SPECTRO COIN & TEST BAR SAMPLE'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SPECTRO COIN & TEST BAR SAMPLE</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SPECTRO COIN & TEST BAR SAMPLE'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SPECTRO COIN & TEST BAR SAMPLE</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        } else if (subdeptManpower === 'Fettling') {
          return (
            <Grid container spacing={2} style={{ textAlign: 'center' }}>
              {(() => {
                if (final_fettling_all_item !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('FINAL FETTLING ALL ITEM'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>FINAL FETTLING ALL ITEM</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('FINAL FETTLING ALL ITEM'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>FINAL FETTLING ALL ITEM</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (averaging !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('AVERAGING'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>AVERAGING</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('AVERAGING'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>AVERAGING</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (crane_operating !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CRANE OPERATING'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CRANE OPERATING</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('CRANE OPERATING'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>CRANE OPERATING</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
              {(() => {
                if (sami_final_fettling !== '') {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#1ef700", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAMI FINAL FETTLING'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAMI FINAL FETTLING</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Card style={{ backgroundColor: "#ff0a0a", color: "#ffff" }} onClick={() => { handleOpen(true); setLocation('SAMI FINAL FETTLING'); }}>
                        <CardActionArea><CardContent><Typography style={{ fontSize: "1.5rem" }}>SAMI FINAL FETTLING</Typography></CardContent></CardActionArea>
                      </Card>
                    </Grid>
                  )
                }
              })()}
            </Grid>
          )
        }
      })()}
      <ManpowerPopup
        openEmployeesPopup={openEmployeesPopup}
        onClose={handleClickClose}
        location={location}
      >
        <ViewManpower
          subdept={subdeptManpower}
          location={location}
          shift={shift}
        />
      </ManpowerPopup>
    </>
  );
}

export default ActualGraphicalView;