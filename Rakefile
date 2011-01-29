task :default => [:pack]

task :pack do
  
  require 'rubygems'
  require 'closure-compiler'
  options = {:compilation_level => 'ADVANCED_OPTIMIZATIONS'}
#  options = {}
  closure = Closure::Compiler.new(options)
  files = %w{sizzle.js}
  text = files.each { |file|
    compiled = closure.compile(File.read(file))
    ext = File.extname(file)
    file = File.open(File.basename(file, ext)<<".min"<<ext, "w")
    file.write(%{(function(){#{compiled}})();})
    file.close
  }
end