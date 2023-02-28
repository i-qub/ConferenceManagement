import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Select, TextField } from "@material-ui/core";
import PinDropIcon from '@material-ui/icons/PinDrop';

export default function ViewSkillDetails(props) {
    const { subdept } = props;
    const [token, setToken] = useState("");
    const { onSubmitClose } = props;

    useEffect(() => {
        const { token } = props;
        const { subdept } = props;
        axios.post('http://192.168.1.52:3000/emp/viewSkillDetails', {
            token: token,
            subdept: subdept
        }).then((response) => {
            //Melting
            setpanel_no_1_operator(response.data[0].panel_no_1_operator);
            setpanel_no_1_co_operator(response.data[0].panel_no_1_co_operator);
            setpanel_no_1_charge_collector(response.data[0].panel_no_1_charge_collector);
            setpanel_no_2_operator(response.data[0].panel_no_2_operator);
            setpanel_no_2_co_operator(response.data[0].panel_no_2_co_operator);
            setpanel_no_3_operator(response.data[0].panel_no_3_operator);
            setpanel_no_3_co_operator(response.data[0].panel_no_3_co_operator);
            setspectro_coin_test_bar_sample(response.data[0].spectro_coin_test_bar_sample);
            setcrane_operator(response.data[0].crane_operator);
            setslag_collector_panel_1(response.data[0].slag_collector_panel_1);
            setslag_collector_panel_2(response.data[0].slag_collector_panel_2);
            setslag_collector_panel_3(response.data[0].slag_collector_panel_3);
            setl3(response.data[0].l3);
            setl2(response.data[0].l2);
            setl1(response.data[0].l1);
            settotal(response.data[0].total);

            //Arpa 450
            setcope_m_c_operator(response.data[0].cope_m_c_operator);
            setcope_box_loading_op(response.data[0].cope_box_loading_op);
            setdrag_m_c_operator(response.data[0].drag_m_c_operator);
            setdrag_box_loading_op(response.data[0].drag_box_loading_op);
            setdrag_box_unloading_op(response.data[0].drag_box_unloading_op);
            setcore_tranfer_fixture_op(response.data[0].core_tranfer_fixture_op);
            setcore_tranfer_fixture_co_op(response.data[0].core_tranfer_fixture_co_op);
            setcore_setting_operator(response.data[0].core_setting_operator);
            setclamping_operator_1(response.data[0].clamping_operator_1);
            setclamping_operator_2(response.data[0].clamping_operator_2);
            setdrag_mould_venting_op(response.data[0].drag_mould_venting_op);
            setventing_operator_1(response.data[0].venting_operator_1);
            setventing_operator_2(response.data[0].venting_operator_2);
            setbox_closing_operator(response.data[0].box_closing_operator);
            setpouring_crane_operator(response.data[0].pouring_crane_operator);
            setpouring_operator(response.data[0].pouring_operator);
            setk_out_operator(response.data[0].k_out_operator);
            setcasting_transfer_op(response.data[0].casting_transfer_op);

            //W B Q 3
            setcope_m_c_co_operator(response.data[0].cope_m_c_co_operator);
            setdrag_m_c_co_operator(response.data[0].drag_m_c_co_operator);
            setempty_pallet_trasfer_op(response.data[0].empty_pallet_trasfer_op);
            setdrag_box_venting_op(response.data[0].drag_box_venting_op);
            setdrag_core_setting_op(response.data[0].drag_core_setting_op);
            setcope_core_setting_op(response.data[0].cope_core_setting_op);
            setventing_operator_3(response.data[0].venting_operator_3);
            setbox_closing_co_operator(response.data[0].box_closing_co_operator);
            setclamping_operator(response.data[0].clamping_operator);
            setmold_box_transfer_op(response.data[0].mold_box_transfer_op);
            setk_out_co_operator(response.data[0].k_out_co_operator);
            setsand_plant_operator(response.data[0].sand_plant_operator);

            //COLD BOX
            setcold_box_machineno_01(response.data[0].cold_box_machineno_01);
            setcold_box_machineno_01_co_operator(response.data[0].cold_box_machineno_01_co_operator);
            setcold_box_machineno_02(response.data[0].cold_box_machineno_02);
            setcold_box_machineno_02_co_operator_1(response.data[0].cold_box_machineno_02_co_operator_1);
            setcold_box_machineno_02_co_operator_2(response.data[0].cold_box_machineno_02_co_operator_2);
            setcold_box_machineno_03(response.data[0].cold_box_machineno_03);
            setcold_box_machineno_03_co_operator(response.data[0].cold_box_machineno_03_co_operator);
            setcold_box_machineno_04(response.data[0].cold_box_machineno_04);
            setcold_box_machineno_04_co_operator(response.data[0].cold_box_machineno_04_co_operator);
            setcold_box_machineno_05(response.data[0].cold_box_machineno_05);
            setcold_box_machineno_05_co_operator_1(response.data[0].cold_box_machineno_05_co_operator_1);
            setcold_box_machineno_05_co_operator_2(response.data[0].cold_box_machineno_05_co_operator_2);
            setcold_box_machineno_06(response.data[0].cold_box_machineno_06);
            setcold_box_machineno_06_co_operator_1(response.data[0].cold_box_machineno_06_co_operator_1);
            setcold_box_machineno_06_co_operator_2(response.data[0].cold_box_machineno_06_co_operator_2);
            setcold_box_machineno_07(response.data[0].cold_box_machineno_07);
            setcold_box_machineno_07_co_operator_1(response.data[0].cold_box_machineno_07_co_operator_1);
            setcold_box_machineno_07_co_operator_2(response.data[0].cold_box_machineno_07_co_operator_2);
            setcold_box_machineno_08(response.data[0].cold_box_machineno_08);
            setcold_box_machineno_08_co_operator(response.data[0].cold_box_machineno_08_co_operator);
            setcold_box_machineno_09(response.data[0].cold_box_machineno_09);
            setcold_box_machineno_10(response.data[0].cold_box_machineno_10);
            setcold_box_machineno_11(response.data[0].cold_box_machineno_11);
            setcold_box_machineno_11_co_operator(response.data[0].cold_box_machineno_11_co_operator);
            setsand_feeding_1(response.data[0].sand_feeding_1);
            setsand_feeding_2(response.data[0].sand_feeding_2);
            setmixer_900(response.data[0].mixer_900);
            setmixer_450(response.data[0].mixer_450);
            setpainting_skilled_operator(response.data[0].painting_skilled_operator);
            setpainting_operator_900_1(response.data[0].painting_operator_900_1);
            setpainting_operator_900_2(response.data[0].painting_operator_900_2);
            setpainting_operator_900_3(response.data[0].painting_operator_900_3);
            setpainting_skilled_operator_arpa_450(response.data[0].painting_skilled_operator_arpa_450);
            setpainting_operator_arpa_450(response.data[0].painting_operator_arpa_450);
            setskilled_inspector_arpa_450(response.data[0].skilled_inspector_arpa_450);
            setoven_skilled_operator(response.data[0].oven_skilled_operator);
            setoven_co_operator(response.data[0].oven_co_operator);
            setcore_box_cleaning_vent_changing(response.data[0].core_box_cleaning_vent_changing);
            setinspection_arpa900(response.data[0].inspection_arpa900);
            setinspection_co_operator_arpa_900(response.data[0].inspection_co_operator_arpa_900);
            setassembly_operator_450(response.data[0].assembly_operator_450);
            setassembly_450_co_operator(response.data[0].assembly_450_co_operator);
            settool_change(response.data[0].tool_change);
            setventing_skill_operator(response.data[0].venting_skill_operator);
            setventing_skill_co_operator_1(response.data[0].venting_skill_co_operator_1);
            setventing_skill_co_operator_2(response.data[0].venting_skill_co_operator_2);

            //Shell Core
            setshell_machine_no_01(response.data[0].shell_machine_no_01);
            setshell_machine_no_02(response.data[0].shell_machine_no_02);
            setshell_machine_no_03(response.data[0].shell_machine_no_03);
            setshell_machine_no_04(response.data[0].shell_machine_no_04);
            setshell_machine_no_05(response.data[0].shell_machine_no_05);
            setshell_machine_no_05_co_operator(response.data[0].shell_machine_no_05_co_operator);
            setshell_machine_no_06(response.data[0].shell_machine_no_06);
            setshell_machine_no_07(response.data[0].shell_machine_no_07);
            setshell_machine_no_08(response.data[0].shell_machine_no_08);
            setshell_machine_no_09(response.data[0].shell_machine_no_09);
            setshell_machine_no_10(response.data[0].shell_machine_no_10);
            setshell_machine_no_12(response.data[0].shell_machine_no_12);
            setshell_machine_no_13(response.data[0].shell_machine_no_13);
            setshell_machine_no_14(response.data[0].shell_machine_no_14);
            setshell_machine_no_15(response.data[0].shell_machine_no_15);
            setshell_machine_no_16(response.data[0].shell_machine_no_16);
            setshell_machine_no_17(response.data[0].shell_machine_no_17);
            setshell_machine_no_19(response.data[0].shell_machine_no_19);
            setshell_machine_no_20(response.data[0].shell_machine_no_20);
            setshell_machine_no_21(response.data[0].shell_machine_no_21);
            setshell_machine_no_22(response.data[0].shell_machine_no_22);
            setjd_head_assembly_01(response.data[0].jd_head_assembly_01);
            setjd_head_assembly_02(response.data[0].jd_head_assembly_02);
            setjd_head_assembly_co_operator(response.data[0].jd_head_assembly_co_operator);
            setsame_head(response.data[0].same_head);
            setsame_kf_head_01(response.data[0].same_kf_head_01);
            setsame_kf_head_co_operator_1(response.data[0].same_kf_head_co_operator_1);
            setsame_kf_head_co_operator_2(response.data[0].same_kf_head_co_operator_2);
            settata_4sp_block(response.data[0].tata_4sp_block);
            setcore_oven_operator(response.data[0].core_oven_operator);
            setcore_oven_co_operator_1(response.data[0].core_oven_co_operator_1);
            setcore_oven_co_operator_2(response.data[0].core_oven_co_operator_2);
            setcore_oven_co_operator_3(response.data[0].core_oven_co_operator_3);
            setinspection(response.data[0].inspection);
            setinspection_co_operator(response.data[0].inspection_co_operator);
            setassembly_dipping(response.data[0].assembly_dipping);

            //Arpa 900
            setm_c_co_operator_air_1(response.data[0].m_c_co_operator_air_1);
            setm_c_co_operator_1(response.data[0].m_c_co_operator_1);
            setm_c_co_operator_air_2(response.data[0].m_c_co_operator_air_2);
            setm_c_co_operator_2(response.data[0].m_c_co_operator_2);
            setdrag_mould_painting_op(response.data[0].drag_mould_painting_op);
            setcore_setting_operator_1(response.data[0].core_setting_operator_1);
            setcore_setting_operator_2(response.data[0].core_setting_operator_2);
            setcope_box_prepration_op(response.data[0].cope_box_prepration_op);
            setclamp_pin_removing_op(response.data[0].clamp_pin_removing_op);
            setk_out_crane_operator(response.data[0].k_out_crane_operator);
            setk_out_crane_co_operator(response.data[0].k_out_crane_co_operator);
            setempty_box_trasfer_op(response.data[0].empty_box_trasfer_op);
            setsand_plant_co_operator(response.data[0].sand_plant_co_operator);
            setnew_sand_add_operator(response.data[0].new_sand_add_operator);
            setcompactibility_checking_op(response.data[0].compactibility_checking_op);

            //Fettling     
            setfinal_fettling_all_item(response.data[0].final_fettling_all_item);
            setaveraging(response.data[0].averaging);
            setcrane_operating(response.data[0].crane_operating);
            setsami_final_fettling(response.data[0].sami_final_fettling);
            setToken(token);
        });
    }, [props]);

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
    const [l3, setl3] = useState("");
    const [l2, setl2] = useState("");
    const [l1, setl1] = useState("");
    const [total, settotal] = useState("");

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
    const [clamping_operator, setclamping_operator] = useState("");
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

    //Fettling
    const [final_fettling_all_item, setfinal_fettling_all_item] = useState("");
    const [averaging, setaveraging] = useState("");
    const [crane_operating, setcrane_operating] = useState("");
    const [sami_final_fettling, setsami_final_fettling] = useState("");

    const updateSkills = (event) => {
        event.preventDefault();
        if (subdept === 'Melting') {
            axios.post("http://192.168.1.52:3000/emp/updateSkills", {
                token: token,
                subdept: subdept,
                panel_no_1_operator: panel_no_1_operator,
                panel_no_1_co_operator: panel_no_1_co_operator,
                panel_no_1_charge_collector: panel_no_1_charge_collector,
                panel_no_2_operator: panel_no_2_operator,
                panel_no_2_co_operator: panel_no_2_co_operator,
                panel_no_3_operator: panel_no_3_operator,
                panel_no_3_co_operator: panel_no_3_co_operator,
                spectro_coin_test_bar_sample: spectro_coin_test_bar_sample,
                crane_operator: crane_operator,
                slag_collector_panel_1: slag_collector_panel_1,
                slag_collector_panel_2: slag_collector_panel_2,
                slag_collector_panel_3: slag_collector_panel_3,
                l3: l3,
                l2: l2,
                l1: l1,
                total: total
            },
                onSubmitClose());
            window.location.reload();
        } else if (subdept === 'Arpa 450') {
            axios.post("http://192.168.1.52:3000/emp/updateSkills", {
                token: token,
                subdept: subdept,
                cope_m_c_operator: cope_m_c_operator,
                cope_box_loading_op: cope_box_loading_op,
                drag_m_c_operator: drag_m_c_operator,
                drag_box_loading_op: drag_box_loading_op,
                drag_box_unloading_op: drag_box_unloading_op,
                core_tranfer_fixture_op: core_tranfer_fixture_op,
                core_tranfer_fixture_co_op: core_tranfer_fixture_co_op,
                core_setting_operator: core_setting_operator,
                clamping_operator_1: clamping_operator_1,
                clamping_operator_2: clamping_operator_2,
                drag_mould_venting_op: drag_mould_venting_op,
                venting_operator_1: venting_operator_1,
                venting_operator_2: venting_operator_2,
                box_closing_operator: box_closing_operator,
                pouring_crane_operator: pouring_crane_operator,
                pouring_operator: pouring_operator,
                k_out_operator: k_out_operator,
                casting_transfer_op: casting_transfer_op,
                l3: l3,
                l2: l2,
                l1: l1,
                total: total
            },
                onSubmitClose());
            window.location.reload();
        } else if (subdept === 'W B Q 3') {
            axios.post("http://192.168.1.52:3000/emp/updateSkills", {
                token: token,
                subdept: subdept,
                cope_m_c_operator: cope_m_c_operator,
                cope_m_c_co_operator: cope_m_c_co_operator,
                drag_m_c_operator: drag_m_c_operator,
                drag_m_c_co_operator: drag_m_c_co_operator,
                empty_pallet_trasfer_op: empty_pallet_trasfer_op,
                drag_box_venting_op: drag_box_venting_op,
                drag_core_setting_op: drag_core_setting_op,
                cope_core_setting_op: cope_core_setting_op,
                venting_operator_1: venting_operator_1,
                venting_operator_2: venting_operator_2,
                venting_operator_3: venting_operator_3,
                box_closing_operator: box_closing_operator,
                box_closing_co_operator: box_closing_co_operator,
                clamping_operator: clamping_operator,
                clamping_operator_1: clamping_operator_1,
                pouring_crane_operator: pouring_crane_operator,
                pouring_operator: pouring_operator,
                mold_box_transfer_op: mold_box_transfer_op,
                k_out_operator: k_out_operator,
                k_out_co_operator: k_out_co_operator,
                sand_plant_operator: sand_plant_operator,
                l3: l3,
                l2: l2,
                l1: l1,
                total: total
            },
                onSubmitClose());
            window.location.reload();
        } else if (subdept === 'Cold Box') {
            axios.post("http://192.168.1.52:3000/emp/updateSkills", {
                token: token,
                subdept: subdept,
                cold_box_machineno_01: cold_box_machineno_01,
                cold_box_machineno_01_co_operator: cold_box_machineno_01_co_operator,
                cold_box_machineno_02: cold_box_machineno_02,
                cold_box_machineno_02_co_operator_1: cold_box_machineno_02_co_operator_1,
                cold_box_machineno_02_co_operator_2: cold_box_machineno_02_co_operator_2,
                cold_box_machineno_03: cold_box_machineno_03,
                cold_box_machineno_03_co_operator: cold_box_machineno_03_co_operator,
                cold_box_machineno_04: cold_box_machineno_04,
                cold_box_machineno_04_co_operator: cold_box_machineno_04_co_operator,
                cold_box_machineno_05: cold_box_machineno_05,
                cold_box_machineno_05_co_operator_1: cold_box_machineno_05_co_operator_1,
                cold_box_machineno_05_co_operator_2: cold_box_machineno_05_co_operator_2,
                cold_box_machineno_06: cold_box_machineno_06,
                cold_box_machineno_06_co_operator_1: cold_box_machineno_06_co_operator_1,
                cold_box_machineno_06_co_operator_2: cold_box_machineno_06_co_operator_2,
                cold_box_machineno_07: cold_box_machineno_07,
                cold_box_machineno_07_co_operator_1: cold_box_machineno_07_co_operator_1,
                cold_box_machineno_07_co_operator_2: cold_box_machineno_07_co_operator_2,
                cold_box_machineno_08: cold_box_machineno_08,
                cold_box_machineno_08_co_operator: cold_box_machineno_08_co_operator,
                cold_box_machineno_09: cold_box_machineno_09,
                cold_box_machineno_10: cold_box_machineno_10,
                cold_box_machineno_11: cold_box_machineno_11,
                cold_box_machineno_11_co_operator: cold_box_machineno_11_co_operator,
                sand_feeding_1: sand_feeding_1,
                sand_feeding_2: sand_feeding_2,
                mixer_900: mixer_900,
                mixer_450: mixer_450,
                painting_skilled_operator: painting_skilled_operator,
                painting_operator_900_1: painting_operator_900_1,
                painting_operator_900_2: painting_operator_900_2,
                painting_operator_900_3: painting_operator_900_3,
                painting_skilled_operator_arpa_450: painting_skilled_operator_arpa_450,
                painting_operator_arpa_450: painting_operator_arpa_450,
                skilled_inspector_arpa_450: skilled_inspector_arpa_450,
                oven_skilled_operator: oven_skilled_operator,
                oven_co_operator: oven_co_operator,
                core_box_cleaning_vent_changing: core_box_cleaning_vent_changing,
                inspection_arpa900: inspection_arpa900,
                inspection_co_operator_arpa_900: inspection_co_operator_arpa_900,
                assembly_operator_450: assembly_operator_450,
                assembly_450_co_operator: assembly_450_co_operator,
                tool_change: tool_change,
                venting_skill_operator: venting_skill_operator,
                venting_skill_co_operator_1: venting_skill_co_operator_1,
                venting_skill_co_operator_2: venting_skill_co_operator_2,
                l3: l3,
                l2: l2,
                l1: l1,
                total: total
            },
                onSubmitClose());
            window.location.reload();
        } else if (subdept === 'Shell Core') {
            axios.post("http://192.168.1.52:3000/emp/updateSkills", {
                token: token,
                subdept: subdept,
                shell_machine_no_01: shell_machine_no_01,
                shell_machine_no_02: shell_machine_no_02,
                shell_machine_no_03: shell_machine_no_03,
                shell_machine_no_04: shell_machine_no_04,
                shell_machine_no_05: shell_machine_no_05,
                shell_machine_no_05_co_operator: shell_machine_no_05_co_operator,
                shell_machine_no_06: shell_machine_no_06,
                shell_machine_no_07: shell_machine_no_07,
                shell_machine_no_08: shell_machine_no_08,
                shell_machine_no_09: shell_machine_no_09,
                shell_machine_no_10: shell_machine_no_10,
                shell_machine_no_12: shell_machine_no_12,
                shell_machine_no_13: shell_machine_no_13,
                shell_machine_no_14: shell_machine_no_14,
                shell_machine_no_15: shell_machine_no_15,
                shell_machine_no_16: shell_machine_no_16,
                shell_machine_no_17: shell_machine_no_17,
                shell_machine_no_19: shell_machine_no_19,
                shell_machine_no_20: shell_machine_no_20,
                shell_machine_no_21: shell_machine_no_21,
                shell_machine_no_22: shell_machine_no_22,
                jd_head_assembly_01: jd_head_assembly_01,
                jd_head_assembly_02: jd_head_assembly_02,
                jd_head_assembly_co_operator: jd_head_assembly_co_operator,
                same_head: same_head,
                same_kf_head_01: same_kf_head_01,
                same_kf_head_co_operator_1: same_kf_head_co_operator_1,
                same_kf_head_co_operator_2: same_kf_head_co_operator_2,
                tata_4sp_block: tata_4sp_block,
                core_oven_operator: core_oven_operator,
                core_oven_co_operator_1: core_oven_co_operator_1,
                core_oven_co_operator_2: core_oven_co_operator_2,
                core_oven_co_operator_3: core_oven_co_operator_3,
                inspection: inspection,
                inspection_co_operator: inspection_co_operator,
                assembly_dipping: assembly_dipping,
                l3: l3,
                l2: l2,
                l1: l1,
                total: total
            },
                onSubmitClose());
            window.location.reload();
        } else if (subdept === 'Arpa 900') {
            axios.post("http://192.168.1.52:3000/emp/updateSkills", {
                token: token,
                subdept: subdept,
                cope_m_c_operator: cope_m_c_operator,
                m_c_co_operator_air_1: m_c_co_operator_air_1,
                m_c_co_operator_1: m_c_co_operator_1,
                drag_m_c_operator: drag_m_c_operator,
                m_c_co_operator_air_2: m_c_co_operator_air_2,
                m_c_co_operator_2: m_c_co_operator_2,
                drag_mould_painting_op: drag_mould_painting_op,
                core_setting_operator_1: core_setting_operator_1,
                core_setting_operator_2: core_setting_operator_2,
                core_tranfer_fixture_op: core_tranfer_fixture_op,
                box_closing_operator: box_closing_operator,
                venting_operator_1: venting_operator_1,
                venting_operator_2: venting_operator_1,
                cope_box_prepration_op: cope_box_prepration_op,
                clamping_operator_1: clamping_operator_1,
                clamping_operator_2: clamping_operator_1,
                clamp_pin_removing_op: clamp_pin_removing_op,
                mold_box_transfer_op: mold_box_transfer_op,
                pouring_crane_operator: pouring_crane_operator,
                pouring_operator: pouring_operator,
                k_out_crane_operator: k_out_crane_operator,
                k_out_crane_co_operator: k_out_crane_co_operator,
                k_out_operator: k_out_operator,
                casting_transfer_op: casting_transfer_op,
                empty_box_trasfer_op: empty_box_trasfer_op,
                sand_plant_operator: sand_plant_operator,
                sand_plant_co_operator: sand_plant_co_operator,
                new_sand_add_operator: new_sand_add_operator,
                compactibility_checking_op: compactibility_checking_op,
                l3: l3,
                l2: l2,
                l1: l1,
                total: total
            },
                onSubmitClose());
            window.location.reload();
        } else if (subdept === 'Fettling') {
            axios.post("http://192.168.1.52:3000/emp/updateSkills", {
                token: token,
                subdept: subdept,
                final_fettling_all_item: final_fettling_all_item,
                averaging: averaging,
                crane_operating: crane_operating,
                sami_final_fettling: sami_final_fettling,
                l3: l3,
                l2: l2,
                l1: l1,
                total: total
            },
                onSubmitClose());
            window.location.reload();
        }
    };

    if (!token) {
        return "Loading...";
    }
    return (
        <>
            <b style={{ fontSize: '18px' }}>Token No.: {token}</b>
            <form onSubmit={updateSkills}>
                {(() => {
                    //Melting Locations
                    if (subdept === 'Melting') {
                        return (
                            <List component="nav">
                                <Grid container spacing={2}>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>PANEL NO-1 Op.: </b>
                                                <Select
                                                    native
                                                    value={panel_no_1_operator}
                                                    onChange={(event) => { setpanel_no_1_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>PANEL NO-1 CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={panel_no_1_co_operator}
                                                    onChange={(event) => { setpanel_no_1_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>PANEL NO-1 CHARGE COLLECTOR: </b>
                                                <Select
                                                    native
                                                    value={panel_no_1_charge_collector}
                                                    onChange={(event) => { setpanel_no_1_charge_collector(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>PANEL NO-2 Op.: </b>
                                                <Select
                                                    native
                                                    value={panel_no_2_operator}
                                                    onChange={(event) => { setpanel_no_2_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>PANEL NO-2 CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={panel_no_2_co_operator}
                                                    onChange={(event) => { setpanel_no_2_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>PANEL NO-3 Op.: </b>
                                                <Select
                                                    native
                                                    value={panel_no_3_operator}
                                                    onChange={(event) => { setpanel_no_3_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>PANEL NO-3 CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={panel_no_3_co_operator}
                                                    onChange={(event) => { setpanel_no_3_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SPECTRO COIN & TEST BAR SAMPLE: </b>
                                                <Select
                                                    native
                                                    value={spectro_coin_test_bar_sample}
                                                    onChange={(event) => { setspectro_coin_test_bar_sample(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CRANE Op.: </b>
                                                <Select
                                                    native
                                                    value={crane_operator}
                                                    onChange={(event) => { setcrane_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SLAG COLLECTOR PANEL-1: </b>
                                                <Select
                                                    native
                                                    value={slag_collector_panel_1}
                                                    onChange={(event) => { setslag_collector_panel_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SLAG COLLECTOR PANEL-2</b>
                                                <Select
                                                    native
                                                    value={slag_collector_panel_2}
                                                    onChange={(event) => { setslag_collector_panel_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SLAG COLLECTOR PANEL-3</b>
                                                <Select
                                                    native
                                                    value={slag_collector_panel_3}
                                                    onChange={(event) => { setslag_collector_panel_3(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L3: </b>
                                                <TextField
                                                    required
                                                    value={l3}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl3(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L2: </b>
                                                <TextField
                                                    required
                                                    value={l2}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl2(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L1: </b>
                                                <TextField
                                                    required
                                                    value={l1}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl1(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Total: </b>
                                                <TextField
                                                    required
                                                    value={total}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { settotal(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        )
                        //Arpa 450 Locations
                    } else if (subdept === 'Arpa 450') {
                        return (
                            <List component="nav">
                                <Grid container spacing={2}>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>COPE M/C Op.: </b>
                                                <Select
                                                    native
                                                    value={cope_m_c_operator}
                                                    onChange={(event) => { setcope_m_c_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>COPE BOX LOADING Op.: </b>
                                                <Select
                                                    native
                                                    value={cope_box_loading_op}
                                                    onChange={(event) => { setcope_box_loading_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG M/C Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_m_c_operator}
                                                    onChange={(event) => { setdrag_m_c_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG BOX LOADING Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_box_loading_op}
                                                    onChange={(event) => { setdrag_box_loading_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG BOX UNLOADING Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_box_unloading_op}
                                                    onChange={(event) => { setdrag_box_unloading_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CORE TRANFER FIXTURE Op.: </b>
                                                <Select
                                                    native
                                                    value={core_tranfer_fixture_op}
                                                    onChange={(event) => { setcore_tranfer_fixture_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CORE TRANFER FIXTURE CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={core_tranfer_fixture_co_op}
                                                    onChange={(event) => { setcore_tranfer_fixture_co_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CORE SETTING Op..: </b>
                                                <Select
                                                    native
                                                    value={core_setting_operator}
                                                    onChange={(event) => { setcore_setting_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CLAMPING Op. 01: </b>
                                                <Select
                                                    native
                                                    value={clamping_operator_1}
                                                    onChange={(event) => { setclamping_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CLAMPING Op. 02: </b>
                                                <Select
                                                    native
                                                    value={clamping_operator_2}
                                                    onChange={(event) => { setclamping_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG MOULD VENTING Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_mould_venting_op}
                                                    onChange={(event) => { setdrag_mould_venting_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>VENTING Op. 01: </b>
                                                <Select
                                                    native
                                                    value={venting_operator_1}
                                                    onChange={(event) => { setventing_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>VENTING Op. 02: </b>
                                                <Select
                                                    native
                                                    value={venting_operator_2}
                                                    onChange={(event) => { setventing_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>BOX CLOSING Op.: </b>
                                                <Select
                                                    native
                                                    value={box_closing_operator}
                                                    onChange={(event) => { setbox_closing_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>POURING CRANE Op.: </b>
                                                <Select
                                                    native
                                                    value={pouring_crane_operator}
                                                    onChange={(event) => { setpouring_crane_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>POURING Op.: </b>
                                                <Select
                                                    native
                                                    value={pouring_operator}
                                                    onChange={(event) => { setpouring_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>K-OUT Op.: </b>
                                                <Select
                                                    native
                                                    value={k_out_operator}
                                                    onChange={(event) => { setk_out_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CASTING TRANSFER Op.: </b>
                                                <Select
                                                    native
                                                    value={casting_transfer_op}
                                                    onChange={(event) => { setcasting_transfer_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L3: </b>
                                                <TextField
                                                    required
                                                    value={l3}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl3(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L2: </b>
                                                <TextField
                                                    required
                                                    value={l2}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl2(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L1: </b>
                                                <TextField
                                                    required
                                                    value={l1}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl1(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Total: </b>
                                                <TextField
                                                    required
                                                    value={total}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { settotal(event.target.value); }}
                                                />
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
                                                <b>COPE M/C Op.: </b>
                                                <Select
                                                    native
                                                    value={cope_m_c_operator}
                                                    onChange={(event) => { setcope_m_c_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>COPE M/C CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={cope_m_c_co_operator}
                                                    onChange={(event) => { setcope_m_c_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG M/C Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_m_c_operator}
                                                    onChange={(event) => { setdrag_m_c_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG M/C CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_m_c_co_operator}
                                                    onChange={(event) => { setdrag_m_c_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>EMPTY PALLET TRASFER Op.: </b>
                                                <Select
                                                    native
                                                    value={empty_pallet_trasfer_op}
                                                    onChange={(event) => { setempty_pallet_trasfer_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG BOX VENTING Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_box_venting_op}
                                                    onChange={(event) => { setdrag_box_venting_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG CORE SETTING Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_core_setting_op}
                                                    onChange={(event) => { setdrag_core_setting_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>COPE CORE SETTING Op.: </b>
                                                <Select
                                                    native
                                                    value={cope_core_setting_op}
                                                    onChange={(event) => { setcope_core_setting_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>VENTING Op. 01: </b>
                                                <Select
                                                    native
                                                    value={venting_operator_1}
                                                    onChange={(event) => { setventing_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>VENTING Op. 02: </b>
                                                <Select
                                                    native
                                                    value={venting_operator_2}
                                                    onChange={(event) => { setventing_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>VENTING Op. 03: </b>
                                                <Select
                                                    native
                                                    value={venting_operator_3}
                                                    onChange={(event) => { setventing_operator_3(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>BOX CLOSING Op.: </b>
                                                <Select
                                                    native
                                                    value={box_closing_operator}
                                                    onChange={(event) => { setbox_closing_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>BOX CLOSING CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={box_closing_co_operator}
                                                    onChange={(event) => { setbox_closing_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CLAMPING Op. 01: </b>
                                                <Select
                                                    native
                                                    value={clamping_operator}
                                                    onChange={(event) => { setclamping_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CLAMPING Op. 02: </b>
                                                <Select
                                                    native
                                                    value={clamping_operator_1}
                                                    onChange={(event) => { setclamping_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>MOLD BOX TRANSFER Op.: </b>
                                                <Select
                                                    native
                                                    value={mold_box_transfer_op}
                                                    onChange={(event) => { setmold_box_transfer_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>POURING CRANE Op.: </b>
                                                <Select
                                                    native
                                                    value={pouring_crane_operator}
                                                    onChange={(event) => { setpouring_crane_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>POURING Op.: </b>
                                                <Select
                                                    native
                                                    value={pouring_operator}
                                                    onChange={(event) => { setpouring_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>K-OUT Op.: </b>
                                                <Select
                                                    native
                                                    value={k_out_operator}
                                                    onChange={(event) => { setk_out_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>K-OUT CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={k_out_co_operator}
                                                    onChange={(event) => { setk_out_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SAND PLANT Op.: </b>
                                                <Select
                                                    native
                                                    value={sand_plant_operator}
                                                    onChange={(event) => { setsand_plant_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L3: </b>
                                                <TextField
                                                    required
                                                    value={l3}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl3(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L2: </b>
                                                <TextField
                                                    required
                                                    value={l2}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl2(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L1: </b>
                                                <TextField
                                                    required
                                                    value={l1}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl1(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Total: </b>
                                                <TextField
                                                    required
                                                    value={total}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { settotal(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        )
                        //Cold Box Locations
                    } else if (subdept === 'Cold Box') {
                        return (
                            <List component="nav">
                                <Grid container spacing={2}>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.01: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_01}
                                                    onChange={(event) => { setcold_box_machineno_01(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.01 Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_01_co_operator}
                                                    onChange={(event) => { setcold_box_machineno_01_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.02: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_02}
                                                    onChange={(event) => { setcold_box_machineno_02(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.02 Co-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_02_co_operator_1}
                                                    onChange={(event) => { setcold_box_machineno_02_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.02 Co-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_02_co_operator_2}
                                                    onChange={(event) => { setcold_box_machineno_02_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.03: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_03}
                                                    onChange={(event) => { setcold_box_machineno_03(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.03 Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_03_co_operator}
                                                    onChange={(event) => { setcold_box_machineno_03_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.04: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_04}
                                                    onChange={(event) => { setcold_box_machineno_04(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.04 Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_04_co_operator}
                                                    onChange={(event) => { setcold_box_machineno_04_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.05: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_05}
                                                    onChange={(event) => { setcold_box_machineno_05(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.05 Co-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_05_co_operator_1}
                                                    onChange={(event) => { setcold_box_machineno_05_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.05 Co-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_05_co_operator_2}
                                                    onChange={(event) => { setcold_box_machineno_05_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.06: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_06}
                                                    onChange={(event) => { setcold_box_machineno_06(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.06 Co-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_06_co_operator_1}
                                                    onChange={(event) => { setcold_box_machineno_06_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.06 Co-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_06_co_operator_2}
                                                    onChange={(event) => { setcold_box_machineno_06_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.07: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_07}
                                                    onChange={(event) => { setcold_box_machineno_07(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.07 Co-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_07_co_operator_1}
                                                    onChange={(event) => { setcold_box_machineno_07_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.07 Co-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_07_co_operator_2}
                                                    onChange={(event) => { setcold_box_machineno_07_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.08: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_08}
                                                    onChange={(event) => { setcold_box_machineno_08(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.08 Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_08_co_operator}
                                                    onChange={(event) => { setcold_box_machineno_08_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.09: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_09}
                                                    onChange={(event) => { setcold_box_machineno_09(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.10: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_10}
                                                    onChange={(event) => { setcold_box_machineno_10(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.11: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_11}
                                                    onChange={(event) => { setcold_box_machineno_11(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Cold Box Machine No.11 Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={cold_box_machineno_11_co_operator}
                                                    onChange={(event) => { setcold_box_machineno_11_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Sand Feeding 01: </b>
                                                <Select
                                                    native
                                                    value={sand_feeding_1}
                                                    onChange={(event) => { setsand_feeding_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Sand Feeding 02: </b>
                                                <Select
                                                    native
                                                    value={sand_feeding_2}
                                                    onChange={(event) => { setsand_feeding_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Mixer 900: </b>
                                                <Select
                                                    native
                                                    value={mixer_900}
                                                    onChange={(event) => { setmixer_900(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Mixer 450: </b>
                                                <Select
                                                    native
                                                    value={mixer_450}
                                                    onChange={(event) => { setmixer_450(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Painting Skilled Op.: </b>
                                                <Select
                                                    native
                                                    value={painting_skilled_operator}
                                                    onChange={(event) => { setpainting_skilled_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Painting Op. 900-01: </b>
                                                <Select
                                                    native
                                                    value={painting_operator_900_1}
                                                    onChange={(event) => { setpainting_operator_900_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Painting Op. 900-02: </b>
                                                <Select
                                                    native
                                                    value={painting_operator_900_2}
                                                    onChange={(event) => { setpainting_operator_900_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Painting Op. 900-03: </b>
                                                <Select
                                                    native
                                                    value={painting_operator_900_3}
                                                    onChange={(event) => { setpainting_operator_900_3(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Painting Skilled Op. Arpa 450: </b>
                                                <Select
                                                    native
                                                    value={painting_skilled_operator_arpa_450}
                                                    onChange={(event) => { setpainting_skilled_operator_arpa_450(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Painting Op. Arpa 450: </b>
                                                <Select
                                                    native
                                                    value={painting_operator_arpa_450}
                                                    onChange={(event) => { setpainting_operator_arpa_450(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Skilled Inspector Arpa 450: </b>
                                                <Select
                                                    native
                                                    value={skilled_inspector_arpa_450}
                                                    onChange={(event) => { setskilled_inspector_arpa_450(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Oven Skilled Op.: </b>
                                                <Select
                                                    native
                                                    value={oven_skilled_operator}
                                                    onChange={(event) => { setoven_skilled_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Oven Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={oven_co_operator}
                                                    onChange={(event) => { setoven_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Core Box Cleaning & Vent Changing: </b>
                                                <Select
                                                    native
                                                    value={core_box_cleaning_vent_changing}
                                                    onChange={(event) => { setcore_box_cleaning_vent_changing(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Inspection Arpa 900: </b>
                                                <Select
                                                    native
                                                    value={inspection_arpa900}
                                                    onChange={(event) => { setinspection_arpa900(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Inspection Co-Op. Arpa 900: </b>
                                                <Select
                                                    native
                                                    value={inspection_co_operator_arpa_900}
                                                    onChange={(event) => { setinspection_co_operator_arpa_900(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Assembly Op. 450: </b>
                                                <Select
                                                    native
                                                    value={assembly_operator_450}
                                                    onChange={(event) => { setassembly_operator_450(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Assembly 450 Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={assembly_450_co_operator}
                                                    onChange={(event) => { setassembly_450_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Tool Change: </b>
                                                <Select
                                                    native
                                                    value={tool_change}
                                                    onChange={(event) => { settool_change(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Venting Skill Op.: </b>
                                                <Select
                                                    native
                                                    value={venting_skill_operator}
                                                    onChange={(event) => { setventing_skill_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Venting Skill Co-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={venting_skill_co_operator_1}
                                                    onChange={(event) => { setventing_skill_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Venting Skill Co-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={venting_skill_co_operator_2}
                                                    onChange={(event) => { setventing_skill_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L3: </b>
                                                <TextField
                                                    required
                                                    value={l3}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl3(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L2: </b>
                                                <TextField
                                                    required
                                                    value={l2}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl2(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L1: </b>
                                                <TextField
                                                    required
                                                    value={l1}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl1(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Total: </b>
                                                <TextField
                                                    required
                                                    value={total}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { settotal(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>)
                        //Shell Core Locations
                    } else if (subdept === 'Shell Core') {
                        return (
                            <List component="nav">
                                <Grid container spacing={2}>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.01: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_01}
                                                    onChange={(event) => { setshell_machine_no_01(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.02: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_02}
                                                    onChange={(event) => { setshell_machine_no_02(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.03: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_03}
                                                    onChange={(event) => { setshell_machine_no_03(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.04: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_04}
                                                    onChange={(event) => { setshell_machine_no_04(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.05: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_05}
                                                    onChange={(event) => { setshell_machine_no_05(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.05 Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_05_co_operator}
                                                    onChange={(event) => { setshell_machine_no_05_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.06: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_06}
                                                    onChange={(event) => { setshell_machine_no_06(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.07: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_07}
                                                    onChange={(event) => { setshell_machine_no_07(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.08: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_08}
                                                    onChange={(event) => { setshell_machine_no_08(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.09: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_09}
                                                    onChange={(event) => { setshell_machine_no_09(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.10: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_10}
                                                    onChange={(event) => { setshell_machine_no_10(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.12: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_12}
                                                    onChange={(event) => { setshell_machine_no_12(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.13: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_13}
                                                    onChange={(event) => { setshell_machine_no_13(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.14: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_14}
                                                    onChange={(event) => { setshell_machine_no_14(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.15: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_15}
                                                    onChange={(event) => { setshell_machine_no_15(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.16: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_16}
                                                    onChange={(event) => { setshell_machine_no_16(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.17: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_17}
                                                    onChange={(event) => { setshell_machine_no_17(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.19: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_19}
                                                    onChange={(event) => { setshell_machine_no_19(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.20: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_20}
                                                    onChange={(event) => { setshell_machine_no_20(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.21: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_21}
                                                    onChange={(event) => { setshell_machine_no_21(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Shell Machine No.22: </b>
                                                <Select
                                                    native
                                                    value={shell_machine_no_22}
                                                    onChange={(event) => { setshell_machine_no_22(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>JD Head Assembly 01: </b>
                                                <Select
                                                    native
                                                    value={jd_head_assembly_01}
                                                    onChange={(event) => { setjd_head_assembly_01(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>JD Head Assembly 02: </b>
                                                <Select
                                                    native
                                                    value={jd_head_assembly_02}
                                                    onChange={(event) => { setjd_head_assembly_02(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>JD Head Assembly Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={jd_head_assembly_co_operator}
                                                    onChange={(event) => { setjd_head_assembly_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Same Head: </b>
                                                <Select
                                                    native
                                                    value={same_head}
                                                    onChange={(event) => { setsame_head(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Same KF Head 01: </b>
                                                <Select
                                                    native
                                                    value={same_kf_head_01}
                                                    onChange={(event) => { setsame_kf_head_01(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Same KF Head Co-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={same_kf_head_co_operator_1}
                                                    onChange={(event) => { setsame_kf_head_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Same KF Head Co-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={same_kf_head_co_operator_2}
                                                    onChange={(event) => { setsame_kf_head_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>TATA 4Sp block: </b>
                                                <Select
                                                    native
                                                    value={tata_4sp_block}
                                                    onChange={(event) => { settata_4sp_block(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Core Oven Op.: </b>
                                                <Select
                                                    native
                                                    value={core_oven_operator}
                                                    onChange={(event) => { setcore_oven_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Core Oven Co-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={core_oven_co_operator_1}
                                                    onChange={(event) => { setcore_oven_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Core Oven Co-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={core_oven_co_operator_2}
                                                    onChange={(event) => { setcore_oven_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Core Oven Co-Op. 03: </b>
                                                <Select
                                                    native
                                                    value={core_oven_co_operator_3}
                                                    onChange={(event) => { setcore_oven_co_operator_3(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Inspection: </b>
                                                <Select
                                                    native
                                                    value={inspection}
                                                    onChange={(event) => { setinspection(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Inspection Co-Op.: </b>
                                                <Select
                                                    native
                                                    value={inspection_co_operator}
                                                    onChange={(event) => { setinspection_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Assembly Dipping: </b>
                                                <Select
                                                    native
                                                    value={assembly_dipping}
                                                    onChange={(event) => { setassembly_dipping(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Tool change: </b>
                                                <Select
                                                    native
                                                    value={tool_change}
                                                    onChange={(event) => { settool_change(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L3: </b>
                                                <TextField
                                                    required
                                                    value={l3}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl3(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L2: </b>
                                                <TextField
                                                    required
                                                    value={l2}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl2(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L1: </b>
                                                <TextField
                                                    required
                                                    value={l1}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl1(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Total: </b>
                                                <TextField
                                                    required
                                                    value={total}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { settotal(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        )
                        //Arpa 900 Locations
                    } else if (subdept === 'Arpa 900') {
                        return (
                            <List component="nav">
                                <Grid container spacing={2}>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>COPE M/C Op.: </b>
                                                <Select
                                                    native
                                                    value={cope_m_c_operator}
                                                    onChange={(event) => { setcope_m_c_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>M/C CO-Op.(AIR) 01: </b>
                                                <Select
                                                    native
                                                    value={m_c_co_operator_air_1}
                                                    onChange={(event) => { setm_c_co_operator_air_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>M/C CO-Op. 01: </b>
                                                <Select
                                                    native
                                                    value={m_c_co_operator_1}
                                                    onChange={(event) => { setm_c_co_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG M/C Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_m_c_operator}
                                                    onChange={(event) => { setdrag_m_c_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>M/C CO-Op.(AIR) 02: </b>
                                                <Select
                                                    native
                                                    value={m_c_co_operator_air_2}
                                                    onChange={(event) => { setm_c_co_operator_air_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>M/C CO-Op. 02: </b>
                                                <Select
                                                    native
                                                    value={m_c_co_operator_2}
                                                    onChange={(event) => { setm_c_co_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>DRAG MOULD PAINTING Op.: </b>
                                                <Select
                                                    native
                                                    value={drag_mould_painting_op}
                                                    onChange={(event) => { setdrag_mould_painting_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CORE SETTING Op. 01: </b>
                                                <Select
                                                    native
                                                    value={core_setting_operator_1}
                                                    onChange={(event) => { setcore_setting_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CORE SETTING Op. 02: </b>
                                                <Select
                                                    native
                                                    value={core_setting_operator_2}
                                                    onChange={(event) => { setcore_setting_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CORE TRANFER FIXTURE Op.: </b>
                                                <Select
                                                    native
                                                    value={core_tranfer_fixture_op}
                                                    onChange={(event) => { setcore_tranfer_fixture_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>BOX CLOSING Op.: </b>
                                                <Select
                                                    native
                                                    value={box_closing_operator}
                                                    onChange={(event) => { setbox_closing_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>VENTING Op. 01: </b>
                                                <Select
                                                    native
                                                    value={venting_operator_1}
                                                    onChange={(event) => { setventing_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>VENTING Op. 02: </b>
                                                <Select
                                                    native
                                                    value={venting_operator_2}
                                                    onChange={(event) => { setventing_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>COPE BOX PREPRATION Op.: </b>
                                                <Select
                                                    native
                                                    value={cope_box_prepration_op}
                                                    onChange={(event) => { setcope_box_prepration_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CLAMPING Op. 01: </b>
                                                <Select
                                                    native
                                                    value={clamping_operator_1}
                                                    onChange={(event) => { setclamping_operator_1(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CLAMPING Op. 02: </b>
                                                <Select
                                                    native
                                                    value={clamping_operator_2}
                                                    onChange={(event) => { setclamping_operator_2(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>MOLD BOX TRANSFER Op.: </b>
                                                <Select
                                                    native
                                                    value={mold_box_transfer_op}
                                                    onChange={(event) => { setmold_box_transfer_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CLAMP & PIN REMOVING Op.: </b>
                                                <Select
                                                    native
                                                    value={clamp_pin_removing_op}
                                                    onChange={(event) => { setclamp_pin_removing_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>POURING CRANE Op.: </b>
                                                <Select
                                                    native
                                                    value={pouring_crane_operator}
                                                    onChange={(event) => { setpouring_crane_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>POURING Op.: </b>
                                                <Select
                                                    native
                                                    value={pouring_operator}
                                                    onChange={(event) => { setpouring_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>K-OUT CRANE Op.: </b>
                                                <Select
                                                    native
                                                    value={k_out_crane_operator}
                                                    onChange={(event) => { setk_out_crane_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>K-OUT CRANE CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={k_out_crane_co_operator}
                                                    onChange={(event) => { setk_out_crane_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>K-OUT Op.: </b>
                                                <Select
                                                    native
                                                    value={k_out_operator}
                                                    onChange={(event) => { setk_out_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CASTING TRANSFER Op.: </b>
                                                <Select
                                                    native
                                                    value={casting_transfer_op}
                                                    onChange={(event) => { setcasting_transfer_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>EMPTY BOX TRASFER Op.: </b>
                                                <Select
                                                    native
                                                    value={empty_box_trasfer_op}
                                                    onChange={(event) => { setempty_box_trasfer_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SAND PLANT Op.: </b>
                                                <Select
                                                    native
                                                    value={sand_plant_operator}
                                                    onChange={(event) => { setsand_plant_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SAND PLANT CO-Op.: </b>
                                                <Select
                                                    native
                                                    value={sand_plant_co_operator}
                                                    onChange={(event) => { setsand_plant_co_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>NEW SAND ADD Op.: </b>
                                                <Select
                                                    native
                                                    value={new_sand_add_operator}
                                                    onChange={(event) => { setnew_sand_add_operator(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>COMPACTIBILITY CHECKING Op.: </b>
                                                <Select
                                                    native
                                                    value={compactibility_checking_op}
                                                    onChange={(event) => { setcompactibility_checking_op(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L3: </b>
                                                <TextField
                                                    required
                                                    value={l3}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl3(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L2: </b>
                                                <TextField
                                                    required
                                                    value={l2}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl2(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L1: </b>
                                                <TextField
                                                    required
                                                    value={l1}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl1(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Total: </b>
                                                <TextField
                                                    required
                                                    value={total}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { settotal(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        )
                        //Fettling
                    } else if (subdept === 'Fettling') {
                        return (
                            <List component="nav">
                                <Grid container spacing={2}>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>FINAL FETTLING ALL ITEM: </b>
                                                <Select
                                                    native
                                                    value={final_fettling_all_item}
                                                    onChange={(event) => { setfinal_fettling_all_item(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>AVERAGING: </b>
                                                <Select
                                                    native
                                                    value={averaging}
                                                    onChange={(event) => { setaveraging(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>CRANE OPERATING: </b>
                                                <Select
                                                    native
                                                    value={crane_operating}
                                                    onChange={(event) => { setcrane_operating(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>SAMI FINAL FETTLING: </b>
                                                <Select
                                                    native
                                                    value={sami_final_fettling}
                                                    onChange={(event) => { setsami_final_fettling(event.target.value); }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value="L3">L3</option>
                                                    <option value="L2">L2</option>
                                                    <option value="L1">L1</option>
                                                </Select>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L3: </b>
                                                <TextField
                                                    required
                                                    value={l3}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl3(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L2: </b>
                                                <TextField
                                                    required
                                                    value={l2}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl2(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>L1: </b>
                                                <TextField
                                                    required
                                                    value={l1}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { setl1(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PinDropIcon />
                                            </ListItemIcon>
                                            <ListItemText>
                                                <b>Total: </b>
                                                <TextField
                                                    required
                                                    value={total}
                                                    style={{ width: '10%' }}
                                                    onChange={(event) => { settotal(event.target.value); }}
                                                />
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                </Grid>
                            </List>
                        )
                    } else if (subdept === 'HAND MOULDING') {
                        return (
                            <h3>No Skills</h3>
                        )
                    }
                })()}
                <Grid item xs={12} sm={4}>
                    <Button
                        type="submit"
                        style={{
                            fontSize: "18px",
                        }}
                        color="primary"
                        variant="contained"
                    >
                        Update
                    </Button>
                </Grid>
            </form>
        </>
    );
}
