package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: СправДолж
 */
@Entity(name = "IISProekt_45СправДолж")
@Table(schema = "public", name = "СправДолж")
public class SpravDolzh {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Должность")
    private String должность;


    public SpravDolzh() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }


}