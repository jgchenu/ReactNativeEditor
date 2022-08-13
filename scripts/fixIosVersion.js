const fs = require('fs');
const iosVersion = '12.4';
const react_native_pods_file =
  'node_modules/react-native/scripts/react_native_pods.rb';
const originPodsRb = fs.readFileSync(react_native_pods_file, 'utf-8');

const fixedPodsRbStr = originPodsRb
  .replace(/'ios' => '11\.0'/g, `'ios' => '${iosVersion}'`)
  .replace(
    /config\.build_settings\['IPHONEOS_DEPLOYMENT_TARGET'\] = '11\.0'/g,
    `config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '${iosVersion}'`,
  );
fs.writeFileSync(react_native_pods_file, fixedPodsRbStr);

const pbxprojFile = 'ios/Pods/Pods.xcodeproj/project.pbxproj';
const originProjectStr = fs.readFileSync(pbxprojFile, 'utf-8');
const fixedProjectStr = originProjectStr.replace(
  /IPHONEOS_DEPLOYMENT_TARGET = 11\.0/g,
  `IPHONEOS_DEPLOYMENT_TARGET = ${iosVersion}`,
  Infinity,
);
console.log(fixedProjectStr);
fs.writeFileSync(pbxprojFile, fixedProjectStr);
