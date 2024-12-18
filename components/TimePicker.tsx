import * as React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import Spacer from "./Spacer";
import Button1 from "./Button1";
import Texttext from "./Texttext";
import {
  Border,
  Color,
  FontSize,
  Padding,
  FontFamily,
  Gap,
} from "../GlobalStyles";

export type TimePickerType = {
  /** Variant props */
  filled?: boolean;
  ranged?: boolean;
  size?: string;
  state?: string;
  validation?: string;
};

const TimePicker = ({
  filled = true,
  ranged = true,
  size = "medium",
  state = "disabled",
  validation = "normal",
}: TimePickerType) => {
  return (
    <View style={styles.timePicker}>
      <View style={styles.wrapper}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderLeft}>Horario</Text>
        </View>
        <Spacer size="spacer 1 - 4px" type="horizontal" />
        <Image
          style={styles.inputAffixIcon}
          resizeMode="cover"
          source={require("../assets/inputaffix.png")}
        />
      </View>
      <View style={[styles.box, styles.boxShadowBox]} />
      <View style={[styles.zeroHeight, styles.boxPosition]}>
        <View style={[styles.timePickerDropdown, styles.boxShadowBox]}>
          <View style={styles.arrow}>
            <Image
              style={styles.arrowHeadIcon}
              resizeMode="cover"
              source={require("../assets/arrowhead.png")}
            />
          </View>
          <View style={[styles.padding, styles.paddingSpaceBlock]}>
            <View style={[styles.headerView, styles.paddingSpaceBlock]}>
              <Text style={[styles.hour, styles.hourTypo]}>00:00:00</Text>
            </View>
            <View style={styles.zeroPixel} />
          </View>
          <View style={styles.pickerBody}>
            <ScrollView style={[styles.list, styles.listFlexBox]}>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>00</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>01</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>02</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>03</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>04</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>05</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>06</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>07</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>08</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>09</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>10</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>11</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>12</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>13</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>14</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>15</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>16</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>17</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>18</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>19</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>20</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>21</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>22</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>23</Text>
              </View>
            </ScrollView>
            <ScrollView style={[styles.list1, styles.listFlexBox]}>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>00</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>01</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>02</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>03</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>04</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>05</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>06</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>07</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>08</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>09</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>10</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>11</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>12</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>13</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>14</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>15</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>16</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>17</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>18</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>19</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>20</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>21</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>22</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>23</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>24</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>25</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>26</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>27</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>28</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>29</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>30</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>31</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>32</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>33</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>34</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>35</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>36</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>37</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>38</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>39</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>40</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>41</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>42</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>43</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>44</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>45</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>46</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>47</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>48</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>49</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>50</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>51</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>52</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>53</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>54</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>55</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>56</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>57</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>58</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>59</Text>
              </View>
            </ScrollView>
            <ScrollView style={[styles.list1, styles.listFlexBox]}>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>00</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>01</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>02</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>03</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>04</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>05</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>06</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>07</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>08</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>09</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>10</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>11</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>12</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>13</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>14</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>15</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>16</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>17</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>18</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>19</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>20</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>21</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>22</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>23</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>24</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>25</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>26</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>27</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>28</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>29</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>30</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>31</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>32</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>33</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>34</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>35</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>36</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>37</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>38</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>39</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>40</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>41</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>42</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>43</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>44</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>45</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>46</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>47</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>48</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>49</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>50</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>51</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>52</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>53</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>54</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>55</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>56</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>57</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>58</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>59</Text>
              </View>
            </ScrollView>
            <View style={[styles.hourClock, styles.listFlexBox]}>
              <View
                style={[
                  styles.componentstimePickerItem144,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>AM</Text>
              </View>
              <View
                style={[
                  styles.componentstimePickerItem,
                  styles.componentstimeItemLayout,
                ]}
              >
                <Text style={[styles.time, styles.hourTypo]}>PM</Text>
              </View>
            </View>
          </View>
          <View style={[styles.pickerPanelfooter, styles.paddingBg]}>
            <View style={[styles.footerExtra, styles.footerSpaceBlock]}>
              <Button1
                iconOnly={false}
                outline={false}
                size="small"
                state="normal"
                type="primary"
                icon={require("../assets/icon11.png")}
                icon2={require("../assets/icon21.png")}
                iconLeft={false}
                iconRight={false}
                buttonAlignSelf="unset"
              />
            </View>
            <View style={[styles.footer, styles.footerSpaceBlock]}>
              <View style={styles.placeholder}>
                <Texttext
                  fillContainer={false}
                  hierarchy="primary"
                  hovered={false}
                  iconLeft={false}
                  iconRight={false}
                  list={false}
                  text="Now"
                  showSubtitle
                  subtitleWidth="unset"
                  subtitleHeight="unset"
                  subtitleAlignSelf="unset"
                  subtitlePaddingTop="unset"
                  textFontSize={16}
                  textFontWeight="unset"
                />
              </View>
              <Button1
                iconOnly={false}
                outline={false}
                size="small"
                state="normal"
                type="primary"
                icon={require("../assets/icon11.png")}
                icon2={require("../assets/icon21.png")}
                iconLeft={false}
                iconRight={false}
                buttonAlignSelf="unset"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadowBox: {
    shadowOpacity: 1,
    borderRadius: Border.br_9xs,
  },
  boxPosition: {
    left: -141,
    bottom: 0,
    right: 141,
    display: "none",
    position: "absolute",
  },
  paddingSpaceBlock: {
    paddingHorizontal: 0,
    overflow: "hidden",
    alignItems: "center",
  },
  hourTypo: {
    textAlign: "center",
    color: Color.bodyTextBodyColor,
    fontSize: FontSize.bodySmall_size,
  },
  listFlexBox: {
    paddingBottom: Padding.p_11xs,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.grayWhite,
  },
  componentstimeItemLayout: {
    paddingLeft: Padding.p_sm,
    height: 28,
    width: 56,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  paddingBg: {
    backgroundColor: Color.grayWhite,
    alignSelf: "stretch",
  },
  footerSpaceBlock: {
    paddingHorizontal: Padding.p_xs,
    overflow: "hidden",
    alignSelf: "stretch",
    backgroundColor: Color.grayWhite,
  },
  placeholderLeft: {
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.themeSecondary,
    textAlign: "left",
  },
  placeholder: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inputAffixIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  wrapper: {
    zIndex: 0,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  box: {
    top: 0,
    shadowColor: "rgba(13, 110, 253, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
    zIndex: 1,
    display: "none",
    backgroundColor: Color.hitBox,
    left: -141,
    bottom: 0,
    right: 141,
    position: "absolute",
  },
  arrowHeadIcon: {
    width: 14,
    height: 7,
  },
  arrow: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    display: "none",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  hour: {
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.antBodyMedium,
  },
  headerView: {
    display: "none",
    flexDirection: "row",
    paddingVertical: Padding.p_6xs,
  },
  zeroPixel: {
    width: 0,
    height: 0,
  },
  padding: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomWidth: 1,
    justifyContent: "center",
    paddingVertical: Padding.p_11xs,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    alignSelf: "stretch",
    backgroundColor: Color.grayWhite,
  },
  time: {
    lineHeight: 21,
    fontFamily: FontFamily.bodySmall,
  },
  componentstimePickerItem: {
    backgroundColor: Color.hitBox,
  },
  list: {
    flex: 1,
  },
  list1: {
    borderLeftWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    flex: 1,
  },
  componentstimePickerItem144: {
    backgroundColor: Color.blue100,
  },
  hourClock: {
    display: "none",
    overflow: "hidden",
  },
  pickerBody: {
    height: 226,
    overflow: "hidden",
    flexDirection: "row",
  },
  footerExtra: {
    paddingVertical: Padding.p_5xs,
    display: "none",
  },
  footer: {
    borderTopWidth: 1,
    paddingVertical: Padding.p_4xs,
    gap: Gap.gap_sm,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  pickerPanelfooter: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  timePickerDropdown: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 16,
    elevation: 16,
    overflow: "hidden",
  },
  zeroHeight: {
    paddingTop: Padding.p_9xs,
    zIndex: 2,
    height: 0,
    display: "none",
  },
  timePicker: {
    top: 660,
    left: 126,
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 137,
    height: 38,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.grayWhite,
  },
});

export default TimePicker;
