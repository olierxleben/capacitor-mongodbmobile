
  Pod::Spec.new do |s|
    s.name = 'CapacitorMongodbMobile'
    s.version = '0.0.1'
    s.summary = 'mongodb mobile wrapper for capacitor'
    s.license = 'MIT'
    s.homepage = 'git@github.com:sriharshaganti/capacitor-mongodbmobile.git'
    s.author = 'Oliver Erxleben'
    s.source = { :git => 'git@github.com:sriharshaganti/capacitor-mongodbmobile.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end