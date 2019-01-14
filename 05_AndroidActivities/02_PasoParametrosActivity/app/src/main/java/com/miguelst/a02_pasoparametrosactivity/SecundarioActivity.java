package com.miguelst.a02_pasoparametrosactivity;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class SecundarioActivity extends AppCompatActivity {
    String nombre;
    int edad;
    TextView tvInformacion;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_secundario);

        // Componentes visuales
        tvInformacion = findViewById(R.id.textViewInformacion);

        // Bundle: colección o conjunto de todos los parámetros
        // que han sido enviados a través del Intent.
        Bundle extras = getIntent().getExtras();

        nombre = extras.getString("nombre");
        edad = extras.getInt("edad");

        // Uso los parámetros para modificar el contenido
        // de los componentes visuales.
        tvInformacion.setText(nombre + " " + edad + " años");
    }
}
