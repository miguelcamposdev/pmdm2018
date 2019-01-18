package com.miguelcr.a03_testautoescuela;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class PreguntasActivity extends AppCompatActivity implements View.OnClickListener {
    int numeroPreguntas, preguntasRealizadas = 0, correctas = 0, idRespuestaCorrecta;
    Button btnSiguiente;
    RadioGroup radioGroupRespuestas;
    RadioButton radioButton1, radioButton2, radioButton3;
    List<Pregunta> listaPreguntas;
    TextView textViewTitulo;
    Random rand;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_preguntas);

        btnSiguiente = findViewById(R.id.buttonNext);
        radioGroupRespuestas = findViewById(R.id.radioGroupRespuestas);
        radioButton1 = findViewById(R.id.radioButton1);
        radioButton2 = findViewById(R.id.radioButton2);
        radioButton3 = findViewById(R.id.radioButton3);
        textViewTitulo = findViewById(R.id.textViewTitulo);

        listaPreguntas = new ArrayList<>();
        listaPreguntas.add(new Pregunta("¿Los coches tienen luces?","Sí","No","A veces"));
        listaPreguntas.add(new Pregunta("¿Los coches tienen asientos?","Sí","No","A veces"));
        listaPreguntas.add(new Pregunta("¿Los coches tienen puertas?","Sí","No","A veces"));
        listaPreguntas.add(new Pregunta("¿Los coches tienen cristales?","Sí","No","A veces"));
        listaPreguntas.add(new Pregunta("¿Los coches tienen volante?","Sí","No","A veces"));
        listaPreguntas.add(new Pregunta("¿Los coches tienen tripalosky?","Sí","No","A veces"));

        Bundle extras = getIntent().getExtras();
        numeroPreguntas = extras.getInt(Constants.EXTRA_NUM_PREGUNTAS);

        rand = new Random();

        btnSiguiente.setOnClickListener(this);
        generarSiguientePregunta();

    }

    @Override
    public void onClick(View v) {
        if(preguntasRealizadas+1 == numeroPreguntas) {
            // El caso en el que se pulsa Finalizar
            Toast.makeText(this, "Has acertado "+correctas+" de "+numeroPreguntas, Toast.LENGTH_SHORT).show();
        } else {
            int rbId = radioGroupRespuestas.getCheckedRadioButtonId();

            if (rbId == idRespuestaCorrecta) {
                correctas++;
            }
            preguntasRealizadas++;

            if (preguntasRealizadas+1 == numeroPreguntas) {
                btnSiguiente.setText("Finalizar");
            }

            generarSiguientePregunta();
        }
    }

    private void generarSiguientePregunta() {
        int randomPregunta = rand.nextInt((listaPreguntas.size()-1) + 1) + 0;

        Pregunta pregunta = listaPreguntas.get(randomPregunta);
        int num = preguntasRealizadas+1;
        textViewTitulo.setText(num + ")" + pregunta.getTitulo());

        int randomRespuesta = rand.nextInt((2 - 0) + 1) + 0;

        if(randomRespuesta == 0) {
            idRespuestaCorrecta = R.id.radioButton1;
            radioButton1.setText(pregunta.getRespuesta1());
            radioButton2.setText(pregunta.getRespuesta2());
            radioButton3.setText(pregunta.getRespuesta3());
        } else if(randomRespuesta == 1) {
            idRespuestaCorrecta = R.id.radioButton2;
            radioButton2.setText(pregunta.getRespuesta1());
            radioButton3.setText(pregunta.getRespuesta2());
            radioButton1.setText(pregunta.getRespuesta3());
        } else {
            idRespuestaCorrecta = R.id.radioButton3;
            radioButton3.setText(pregunta.getRespuesta1());
            radioButton2.setText(pregunta.getRespuesta2());
            radioButton1.setText(pregunta.getRespuesta3());
        }

    }
}
