let appPHP = async()=>{
    let ajax = await fetch("http://localhost/HTML_conexion_PHP_15_10_2021/app.php");
    let data = await ajax.json();
    return data;
}

export default appPHP;