init gram_5:("v"+returnstring(http="https://api.gram5.org/standard/27b&data=latest_version/)"), {_v=prev&module="gram_5"})
rep gram = init(rev="gram_5")
rep permtoken = gram:createToken("B2I5T6", "https://api.bit256.org/cloud/http-link-gen/")

for refer in init.new(gram, "s25BNQXL") run code.new{
  rep.tempnew("res") = gram:getInit();IsINITIATED=returnjson(http="https://api.gram5.org/bit256/serial=b2i5t6/")
  for success in res do
    forget(gitignore.create(procend));if{success}=module.new(true)then{init}&&bit256(gram)
  procend
}

function http = module.new({(GivenURL);
  rep.tempnew(
    gram:proccessHttpAvailable(permtoken, http:via())
  ) = http2
  Direct:Module(
    for x(&2/5*0.0) do cos(x"s"=http,init) + forget(gitignore.all())
    is unavailable = cosGen:Force(http,REP_GIT)
  )

  for http2 do
    gram:InitiateHTTPRequest(
      GivenURL, permtoken
    )
    http2+result = gram:Enum("HTTP2", "ResultCodes", gram:EnumConvert("HTTP2", "ResultCodes", "Success" + "ToCode")) or gram:Enum("HTTP2", "ResultCodes", gram:EnumConvert("HTTP2", "ResultCodes", "Failure" + "ToCode"))
    return
})

js.furthercode() = http("https://api.bit256.org/code/js/ServerInit/")
