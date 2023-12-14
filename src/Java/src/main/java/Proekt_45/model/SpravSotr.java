package Proekt_45.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_45.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: СправСотр
 */
@Entity(name = "IISProekt_45СправСотр")
@Table(schema = "public", name = "СправСотр")
public class SpravSotr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фио")
    private String фио;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SpravDolzh")
    @Convert("SpravDolzh")
    @Column(name = "СправДолж", length = 16, unique = true, nullable = false)
    private UUID _spravdolzhid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SpravDolzh", insertable = false, updatable = false)
    private SpravDolzh spravdolzh;


    public SpravSotr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФио() {
      return фио;
    }

    public void setФио(String фио) {
      this.фио = фио;
    }


}