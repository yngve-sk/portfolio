<template>
  <project-component v-bind="data">
    <div>
      <p>
      The web-based control interface enables many of the following features:
      <ul>
        <li>Reading of sensor measurements</li>
        <li>
          Definition of optimal, acceptable, and critical ranges for each
          individual measurement
        </li>
        <li>
          Automatic adjustment of the environment to keep variables in their
          optimal range
        </li>
        <li>Measurement-based control of plugged in devices</li>
        <li>Time-based control of plugged in devices</li>
        <li>Manual control of plugged in devices</li>
        <li>Automatic storage of measurements for future analysis</li>
        <li>Automatic smoothing of measurements for predictable action</li>
        <li>Fine-grained control of storage and smoothing functionality</li>
        <li>Download of stored measurements to USB</li>
      </ul>
      </p>

      <p>
        The core of the device is a Raspberry Pi running a Node.js server. The
        control interface is utilizing standard web technologies including HTML5,
        CSS3, and JavasSript (ES6). It features Google's material design and
        no-ui-slider. The Pi communicates to one or more Arduino devices via a
        serial connection. Sensors send their measurements to their connected
        Arduino, which forwards them to the Pi for further processing and storage.
        Based on the incoming measurements and conditions, the Pi can send
        commands to connected Arduinos to activate pumps or other devices. The web
        interface enables the user to control under which conditions the device
        should, e.g., pump fertilizer into the water, activate the heater, or
        water the plants.
      </p>
    </div>
  </project-component>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue';
export default {
  components: { ProjectComponent },
  data() {
    return {
      data: {
      title: 'Hydroponics O.L.D.',
      image: require('../../assets/images/OLD-interface1.png'),
      description: `O.L.D. is a device which can be connected to an existing water circuit in a green house or personal garden to optimize the grow conditions.
      It utilizes a main pump to extract water from the circuit into a separated container inside the device.
      It collects measures like temperature, PH, and electric conductivity via sensors and stores them for later analysis.
      Additional devices like diaphragma pumps and heaters allow for the adjustment of the environment to create optimal conditions for plant growth.
      The O.L.D. hosts a website in the local network that can be accessed via the integrated touchscreen, as well as PC and mobile devices.
      `
      }
    };
  }
};
</script>

<style scoped></style>
